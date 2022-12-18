import ormconfig from './ormconfig';
import { DataSource } from 'typeorm';

export const dataSource = new DataSource(ormconfig);
