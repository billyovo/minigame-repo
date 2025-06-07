import { EventScheduleItem } from 'src/shared/types/event';
import * as events from '../shared/assets/events.json';
import { generateSchedule } from './utils/utils';
import { Cron } from '@nestjs/schedule';
import { createCanvas, loadImage, GlobalFonts } from '@napi-rs/canvas';
import { join } from 'path';
import { existsSync, mkdirSync, writeFileSync, readFileSync } from 'fs';
import { Event } from './EventDto';

export class EventsService {
  private events: Map<string, Event>;
  private eventSchedule: Map<string, EventScheduleItem>;

  constructor() {
    this.events = new Map<string, Event>();
    this.events.set('all', {
      title: 'all',
      id: 'all',
      rrule: '',
      emote: '',
    });
    events.forEach((event: Event) => {
      this.events.set(event.id, event);
    });

    this.eventSchedule = generateSchedule(new Date(), events);
    this.generateBanner();
  }

  @Cron('1 0 * * *')
  generateEventSchedule() {
    this.eventSchedule = generateSchedule(new Date(), events);
  }

  @Cron('2 0 * * *')
  async generateBanner() {
    const nearestEvent = Array.from(this.eventSchedule.values()).sort(
      (a, b) => a.nextOccurrence.getTime() - b.nextOccurrence.getTime(),
    )[0];
    this.makeBanner(
      nearestEvent.title,
      nearestEvent.nextOccurrence.toISOString().substring(0, 10),
    );
  }

  getEventNameById(id: string) {
    return this.events.get(id)?.title;
  }

  getEventsData() {
    return events;
  }

  getEventSchedule() {
    return Array.from(this.eventSchedule.values());
  }

  getEventScheduleByEventId(id: string) {
    return this.eventSchedule.get(id);
  }

  async makeBanner(eventName: string, eventTime: string) {
    const outputPath = join(
      process.cwd(),
      './public/banner',
    );
    //if output path doesn't exist, create it
    if (!existsSync(outputPath)) mkdirSync(outputPath);
    const assetsPath = join(process.cwd(), './shared/assets');
    GlobalFonts.registerFromPath(`${assetsPath}/font.ttf`, 'gothicx');
    const canvas = createCanvas(600, 200);
    const ctx = canvas.getContext('2d');
    const baseBannerImgData = readFileSync(`${assetsPath}/banner.png`);
    if (!baseBannerImgData) {
      console.error('Base banner image not found');
      return;
    }
    const base = await loadImage(baseBannerImgData);
    ctx.drawImage(base, 0, 0);

    ctx.font = '65px gothicx';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.fillText(eventName, base.width / 2, base.height / 2 + 15);

    ctx.font = '20px gothicx';
    ctx.textAlign = 'left';
    ctx.fillText(eventTime, base.width - 150, base.height - 22);
    const buffer = canvas.toBuffer('image/png');

    writeFileSync(`${outputPath}/banner-today.png`, buffer);
    console.log(`Banner updated ${eventTime} ${eventName}`);
  }
}
