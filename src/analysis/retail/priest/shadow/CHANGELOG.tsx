import { change, date } from 'common/changelog';
import SPELLS from 'common/SPELLS';
import TALENTS from 'common/TALENTS/priest';
import { DoxAshe } from 'CONTRIBUTORS';
import { Jordan } from 'CONTRIBUTORS';
import { SpellLink } from 'interface';

export default [
  change(date(2025, 9, 5),  <>Add spells to <SpellLink spell={TALENTS.PSYCHIC_LINK_TALENT}/>, update suggestions and thresholds for Archon </>,DoxAshe),
  change(date(2025, 8, 15),  <>Update Shadow for 11.2 changes</>,DoxAshe),
  change(date(2025, 4, 25),  <>Fix <SpellLink spell={TALENTS.DEATHSPEAKER_TALENT}/> missing overwritten procs</>,DoxAshe),
  change(date(2025, 4, 25),  <>Fix <SpellLink spell={TALENTS.SHADOWY_INSIGHT_TALENT}/> proc usage with <SpellLink spell={SPELLS.SHADOW_PRIEST_VOIDWEAVER_VOID_BLAST}/> </>,DoxAshe),
  change(date(2025, 3, 31),  <>Fix <SpellLink spell={SPELLS.MIND_BLAST}/> and <SpellLink spell={SPELLS.SHADOW_PRIEST_VOIDWEAVER_VOID_BLAST}/> cast efficiency for the Voidweaver Hero Talent Tree </>,DoxAshe),
  change(date(2025, 3, 7),  <>Fix <SpellLink spell={TALENTS.POWER_INFUSION_TALENT}/> without TWW season 2 four piece </>,DoxAshe),
  change(date(2025, 3, 5), <>Fix typo in <SpellLink spell={TALENTS.VOID_TORRENT_TALENT}/> section of Short Cooldowns</>,Jordan),
  change(date(2025, 3, 3),  <>Fix <SpellLink spell={TALENTS.POWER_INFUSION_TALENT}/> with TWW season 2 four piece </>,DoxAshe),
  change(date(2025, 3, 2),  <>Update shadow for 11.1 changes and add support for TWW season 2 tier set </>,DoxAshe),
  change(date(2025, 1, 27),  <>Add support and statistics for Shadow's Voidweaver Hero Talent Tree  </>,DoxAshe),
  change(date(2024, 12, 6),  <>Fix cast efficiency for <SpellLink spell={TALENTS.POWER_INFUSION_TALENT}/> with <SpellLink spell={TALENTS.TWINS_OF_THE_SUN_PRIESTESS_TALENT}/> talented</>,DoxAshe),
  change(date(2024, 11, 13),  <>Add support for spells added by Shadow's Voidweaver Hero Talent Tree </>,DoxAshe),
  change(date(2024, 11, 5),  <>Remove <SpellLink spell={TALENTS.SHADOW_WORD_DEATH_TALENT}/> suggestions from guide view </>,DoxAshe),
  change(date(2024, 10, 30),  <>Add support and statistic for Shadow's Archon Hero Talent Tree</>,DoxAshe),
  change(date(2024, 10, 17),  <>Add statistic for Shadow's TWW season 1 tier set</>,DoxAshe),
  change(date(2024, 10, 14),  <>Improve guide view recommendations</>,DoxAshe),
  change(date(2024, 8, 8), <>Update spec for 11.0.2 changes</>,DoxAshe),
  change(date(2024, 7, 31), <>Enable spec for The War Within</>,DoxAshe),
];
