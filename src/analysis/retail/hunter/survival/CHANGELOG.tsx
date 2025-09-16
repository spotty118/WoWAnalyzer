import { change, date } from 'common/changelog';
import { Vetyst,
        Kivlov,
 } from 'CONTRIBUTORS';

export default [
  change(date(2025, 9, 1), 'Update Survival for 11.2.0 support', Kivlov),
  change(date(2024, 11, 17), 'Update Survival to use the Guide style for Analysis.', Kivlov),
  change(date(2024, 11, 10), 'Updating talents for 11.0.5 > Merciless Blow/Butchery and Wildfire Bomb CDR.', Kivlov),
  change(date(2024, 10, 5), 'Enabled Core Foundation for TWW.', Vetyst),
];
