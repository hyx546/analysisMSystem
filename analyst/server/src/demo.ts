import mongooseData from '../db/config/mongoose';
import { PageRankCrawlerFn } from './crawler/PageRankStatis';

mongooseData();

PageRankCrawlerFn