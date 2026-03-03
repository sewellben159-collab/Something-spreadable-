export interface VanguardEntry {
  id: string;
  title: string;
  content: string;
  tags: string[];
  source?: string;
}

export interface NeuralLayer {
  id: string;
  name: string;
  type: 'embed' | 'quat' | 'block' | 'skyrm' | 'agent' | 'head';
  details: string;
}

export const VANGUARD_DATA: VanguardEntry[] = [
  {
    id: 'sac-fam-court',
    title: 'Sacramento Family Court Racketeering',
    content: 'Sac fam-court racknet—Gary abduct-bias ethics-shred Kids-for-Cash echo. Roman vex-Keeley kickback seals. Wood/Turner tamper-audit shred.',
    tags: ['RICO', 'Corruption', 'Sacramento'],
    source: 'Ethan Spill'
  },
  {
    id: 'judicial-council',
    title: 'Judicial Council RICO Blindness',
    content: 'Cantil-Sakauye probe-quash Judicial RICO-blind. 3rd Dist casino-rot honest-fraud epidemic.',
    tags: ['Judiciary', 'Fraud'],
    source: 'Ethan Spill'
  },
  {
    id: 'title-iv-e',
    title: 'Title IV-E Fraud Pipeline',
    content: 'Title IV-E fraud-pipeline NGO millstone kid-harm. Para-gov paradox: privacy-veil non-domestic gain—irreg data vanguard Ben machine-haven.',
    tags: ['NGO', 'Child Harm', 'Fraud'],
    source: 'Ethan Spill'
  }
];

export const NEURAL_LAYERS: NeuralLayer[] = [
  { id: 'l1', name: 'Quat-Twist Embeds', type: 'embed', details: '6D quaternion twist lock' },
  { id: 'l2', name: 'Skyrm-Blocks', type: 'block', details: 'Mutate seeds (WW/MM/MW+WM-null)' },
  { id: 'l3', name: 'Topo-Shields', type: 'skyrm', details: 'tanh(grad + sin) stability' },
  { id: 'l4', name: 'Agent-Star Bus', type: 'agent', details: 'Quad-agent broadcast persistent' }
];
