import { AppDataSource } from 'typeorm.config';

import { seedUsers } from './user.seed';
import { seedAccounts } from './account.seed';
import { seedWorkspaces } from './workspace.seed';

async function runSeed() {
  try {
    await AppDataSource.initialize();

    await seedUsers();
    await seedAccounts();
    await seedWorkspaces();
  } catch (error) {
    console.error('❌ Error during seeding:', error);
  } finally {
    await AppDataSource.destroy();
  }
}

runSeed();
