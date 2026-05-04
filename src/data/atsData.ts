export type CandidateStatus = 'sourced' | 'test' | 'qualified' | 'placed';
export type Region = 'eu' | 'third';

export const regionMeta: Record<Region, { label: string; short: string }> = {
  eu:    { label: 'Europa', short: 'EU' },
  third: { label: 'Derdelanders', short: '3L' },
};

const euCountries = ['Nederland','België','Duitsland','Polen','Tsjechië','Roemenië','Hongarije','Italië','Spanje','Portugal','Frankrijk','Oostenrijk','Slowakije','Bulgarije','Kroatië','Litouwen','Letland','Estland'];
export function regionFor(origin: string): Region {
  return euCountries.includes(origin) ? 'eu' : 'third';
}

export interface AtsCandidate {
  id: string;
  name: string;
  role: string;
  origin: string;
  languages: string[];
  certs: string[];
  status: CandidateStatus;
  vacancySlug?: string;
  testScore?: number;
  testDate?: string;
  notes?: string;
  appliedAt: string;
  initials: string;
  avatar?: string;
  phone?: string;
  email?: string;
  yearsExp?: number;
  available?: 'now' | 'this-week' | 'next-week' | 'placed';
}

export const initialCandidates: AtsCandidate[] = [
  {
    id: 'c-001', name: 'Pawel Kowalski', role: 'MIG/MAG-lasser', origin: 'Polen',
    languages: ['Pools', 'Engels', 'Duits'], certs: ['MIG/MAG procedure', 'VCA basis'],
    status: 'placed', vacancySlug: 'mig-mag-lasser', testScore: 92, testDate: '2026-04-12',
    appliedAt: '2026-03-28', initials: 'PK', notes: 'Top kandidaat, Damen Vlissingen',
    phone: '+48 600 123 456', email: 'pawel.k@example.com', yearsExp: 8, available: 'placed',
  },
  {
    id: 'c-002', name: 'Marko Stojanović', role: 'Pijpfitter', origin: 'Roemenië',
    languages: ['Roemeens', 'Engels'], certs: ['VCA VOL', 'NEN 3140'],
    status: 'qualified', vacancySlug: 'pijpfitter', testScore: 88, testDate: '2026-04-22',
    appliedAt: '2026-04-08', initials: 'MS',
    phone: '+40 700 234 567', email: 'marko.s@example.com', yearsExp: 6, available: 'now',
  },
  {
    id: 'c-003', name: 'Reyna Dela Cruz', role: 'TIG-lasser', origin: 'Filipijnen',
    languages: ['Tagalog', 'Engels'], certs: ['TIG procedure'],
    status: 'qualified', testScore: 85, testDate: '2026-04-25',
    appliedAt: '2026-04-10', initials: 'RD',
    phone: '+63 917 345 678', email: 'reyna.d@example.com', yearsExp: 5, available: 'now',
  },
  {
    id: 'c-004', name: 'Jeroen van Dam', role: 'Constructiebankwerker', origin: 'Nederland',
    languages: ['Nederlands', 'Engels'], certs: ['VCA basis', 'BHV'],
    status: 'test', testDate: '2026-05-04',
    appliedAt: '2026-04-20', initials: 'JD', notes: 'Snelle starter, eigen vervoer',
    phone: '+31 6 4567 8901', email: 'j.vandam@example.com', yearsExp: 3, available: 'next-week',
  },
  {
    id: 'c-005', name: 'Quoc Nguyen', role: 'Apparatenbouwer', origin: 'Vietnam',
    languages: ['Vietnamees', 'Engels'], certs: ['TIG procedure'],
    status: 'test', testDate: '2026-05-08',
    appliedAt: '2026-04-22', initials: 'QN',
    phone: '+84 909 567 890', email: 'quoc.n@example.com', yearsExp: 7, available: 'this-week',
  },
  {
    id: 'c-006', name: 'Emil Schäfer', role: 'CNC-verspaner', origin: 'Duitsland',
    languages: ['Duits', 'Engels'], certs: ['Mazak operator'],
    status: 'sourced',
    appliedAt: '2026-04-29', initials: 'ES',
    phone: '+49 152 678 9012', email: 'e.schaefer@example.com', yearsExp: 4, available: 'this-week',
  },
  {
    id: 'c-007', name: 'Aditya Rahman', role: 'Plaatwerker', origin: 'Indonesië',
    languages: ['Indonesisch', 'Engels'], certs: ['VCA basis'],
    status: 'sourced',
    appliedAt: '2026-04-30', initials: 'AR',
    phone: '+62 812 789 0123', email: 'aditya.r@example.com', yearsExp: 2, available: 'next-week',
  },
  {
    id: 'c-008', name: 'Stefan Müller', role: 'MIG/MAG-lasser', origin: 'Duitsland',
    languages: ['Duits', 'Engels', 'Nederlands'], certs: ['MIG/MAG procedure', 'VCA VOL'],
    status: 'sourced',
    appliedAt: '2026-04-30', initials: 'SM',
    phone: '+49 160 890 1234', email: 's.mueller@example.com', yearsExp: 10, available: 'now',
  },
  {
    id: 'c-009', name: 'István Nagy', role: 'Pijpfitter', origin: 'Hongarije',
    languages: ['Hongaars', 'Engels'], certs: ['VCA basis'],
    status: 'placed', vacancySlug: 'pijpfitter', testScore: 90, testDate: '2026-04-02',
    appliedAt: '2026-03-15', initials: 'IN',
    phone: '+36 30 901 2345', email: 'istvan.n@example.com', yearsExp: 11, available: 'placed',
  },
  {
    id: 'c-010', name: 'Lourdes Mendoza', role: 'Lasser TIG', origin: 'Filipijnen',
    languages: ['Tagalog', 'Engels'], certs: ['TIG procedure', 'VCA basis'],
    status: 'placed', vacancySlug: 'apparatenbouwer', testScore: 95, testDate: '2026-03-28',
    appliedAt: '2026-03-12', initials: 'LM', notes: 'Senior, supervisie-rol',
    phone: '+63 918 012 3456', email: 'lourdes.m@example.com', yearsExp: 14, available: 'placed',
  },
];

export const statusMeta: Record<CandidateStatus, { label: string; color: string; bg: string }> = {
  sourced:   { label: 'Sourced',    color: 'text-[var(--color-status-sourced)]',   bg: 'bg-[var(--color-axxaz-mist)]' },
  test:      { label: 'In test',    color: 'text-[var(--color-status-test)]',      bg: 'bg-orange-100' },
  qualified: { label: 'Gekwalificeerd', color: 'text-[var(--color-status-qualified)]', bg: 'bg-emerald-100' },
  placed:    { label: 'Geplaatst',  color: 'text-[var(--color-status-placed)]',    bg: 'bg-emerald-200' },
};

export const statusOrder: CandidateStatus[] = ['sourced', 'test', 'qualified', 'placed'];

// === ACTIVITY LOG ===
export interface ActivityEntry {
  id: string;
  at: string;
  actor: string;
  type: 'candidate' | 'cert' | 'placement' | 'system' | 'broadcast';
  text: string;
  candidateId?: string;
}

export const activityLog: ActivityEntry[] = [
  { id: 'a-1', at: 'vandaag, 09:14', actor: 'Sourcing Manilla', type: 'candidate', text: 'Stefan Müller geregistreerd via open sollicitatie', candidateId: 'c-008' },
  { id: 'a-2', at: 'vandaag, 08:42', actor: 'Rody Sinke', type: 'placement', text: 'Lourdes Mendoza geplaatst bij apparatenbouwer-opdracht', candidateId: 'c-010' },
  { id: 'a-3', at: 'gisteren, 16:30', actor: 'Arie', type: 'candidate', text: 'Pawel Kowalski testverslag gepubliceerd (92/100)', candidateId: 'c-001' },
  { id: 'a-4', at: 'gisteren, 14:01', actor: 'Arie', type: 'candidate', text: 'Reyna Dela Cruz door TIG-procedure heen', candidateId: 'c-003' },
  { id: 'a-5', at: 'gisteren, 11:20', actor: 'Sem Goddijn', type: 'broadcast', text: 'Verzoek "Damen Vlissingen morgen" verstuurd naar 18 kandidaten' },
  { id: 'a-6', at: '28 apr', actor: 'Systeem', type: 'cert', text: 'NEN-4400-1 reminder verstuurd naar admin' },
  { id: 'a-7', at: '27 apr', actor: 'Recruiter NL', type: 'candidate', text: 'Marko Stojanović test ingepland 22 apr, Tholen' },
  { id: 'a-8', at: '25 apr', actor: 'Sem Goddijn', type: 'placement', text: 'Pawel Kowalski-contract verlengd bij Damen tot 31 dec 2026' },
];

// === NOTIFICATIONS ===
export interface Notification {
  id: string;
  type: 'cert-expiring' | 'broadcast-response' | 'no-reply' | 'test-scheduled' | 'placement' | 'urgent';
  title: string;
  body: string;
  at: string;
  unread: boolean;
  link?: string;
}

export const notifications: Notification[] = [
  { id: 'n-1', type: 'cert-expiring', title: 'NEN-4400-1 verloopt over 13 dagen', body: 'Reminder verstuurd naar admin. Verlengaanvraag indienen.', at: '5 min geleden', unread: true },
  { id: 'n-2', type: 'broadcast-response', title: 'Pawel reageerde JA op shift-verzoek', body: '"Ik kan morgen vanaf 06:30, geen probleem."', at: '12 min geleden', unread: true },
  { id: 'n-3', type: 'urgent', title: 'Spoed: Damen 2 lassers nodig morgen', body: 'Werkvoorbereider Frank de Boer belde, twee man uitgevallen.', at: '1u geleden', unread: true },
  { id: 'n-4', type: 'test-scheduled', title: 'Test ingepland: Jeroen van Dam', body: 'MIG/MAG procedure-test, 4 mei 09:00 Tholen.', at: '2u geleden', unread: true },
  { id: 'n-5', type: 'no-reply', title: 'Stefan Müller reageert al 5 dagen niet', body: 'Laatste contact 25 apr. Follow-up sturen?', at: '4u geleden', unread: true },
  { id: 'n-6', type: 'placement', title: 'Lourdes geplaatst', body: 'Apparatenbouwer Sliedrecht, start 5 mei.', at: 'gisteren', unread: false },
  { id: 'n-7', type: 'cert-expiring', title: 'VCU verloopt over 7 dagen', body: 'Tweede signaal naar admin + eigenaar.', at: 'gisteren', unread: false },
];

// === CLIENTS ===
export interface AtsClient {
  id: string;
  name: string;
  industry: string;
  city: string;
  contactName: string;
  contactPhone: string;
  openVacancies: number;
  placed: number;
  totalRevenue: string;
  status: 'active' | 'prospect' | 'paused';
  since: string;
  logo?: string;
  notes?: string;
}

export const atsClients: AtsClient[] = [
  {
    id: 'cl-1', name: 'Damen Shipyards', industry: 'Scheepsbouw', city: 'Vlissingen',
    contactName: 'Frank de Boer', contactPhone: '+31 118 555 222',
    openVacancies: 4, placed: 22, totalRevenue: '€ 1.42M',
    status: 'active', since: '2024-02-15', notes: '2 jaar partnership · A-klant',
  },
  {
    id: 'cl-2', name: 'Petrochem Botlek BV', industry: 'Petrochemie', city: 'Rotterdam',
    contactName: 'Linda Vermeer', contactPhone: '+31 10 555 333',
    openVacancies: 3, placed: 14, totalRevenue: '€ 890K',
    status: 'active', since: '2024-09-01', notes: 'Veel pijpfitter-vraag offshore',
  },
  {
    id: 'cl-3', name: 'Werkendam Jachten', industry: 'Jachtbouw', city: 'Werkendam',
    contactName: 'Hans Bakker', contactPhone: '+31 183 555 444',
    openVacancies: 1, placed: 8, totalRevenue: '€ 412K',
    status: 'active', since: '2025-03-10',
  },
  {
    id: 'cl-4', name: 'Apparatenbouw Sliedrecht', industry: 'Apparatenbouw', city: 'Sliedrecht',
    contactName: 'Marc van der Meer', contactPhone: '+31 184 555 555',
    openVacancies: 2, placed: 11, totalRevenue: '€ 624K',
    status: 'active', since: '2024-11-20', notes: 'TIG-procedure veel gevraagd',
  },
  {
    id: 'cl-5', name: 'CNC Roosendaal', industry: 'Machinebouw', city: 'Roosendaal',
    contactName: 'Sandra de Vries', contactPhone: '+31 165 555 666',
    openVacancies: 1, placed: 5, totalRevenue: '€ 198K',
    status: 'active', since: '2025-08-01',
  },
  {
    id: 'cl-6', name: 'Bergen Offshore', industry: 'Offshore', city: 'Bergen op Zoom',
    contactName: 'Rik Janssens', contactPhone: '+31 164 555 777',
    openVacancies: 0, placed: 3, totalRevenue: '€ 142K',
    status: 'paused', since: '2025-01-12', notes: 'Project-pauze tot Q3',
  },
  {
    id: 'cl-7', name: 'NieuweBouw Maritiem', industry: 'Scheepsbouw', city: 'Vlissingen',
    contactName: 'Kees Jansen', contactPhone: '+31 118 555 888',
    openVacancies: 0, placed: 0, totalRevenue: '€ 0',
    status: 'prospect', since: '2026-04-15', notes: 'Eerste gesprek 12 mei',
  },
];

// === BROADCASTS / PUSH ===
export type BroadcastStatus = 'open' | 'closed' | 'expired';
export type ResponseStatus = 'pending' | 'yes' | 'no' | 'maybe';

export interface BroadcastResponse {
  candidateId: string;
  status: ResponseStatus;
  respondedAt?: string;
  message?: string;
}

export interface Broadcast {
  id: string;
  sentBy: string;
  sentAt: string;
  type: 'shift' | 'urgent' | 'question';
  subject: string;
  message: string;
  channels: ('whatsapp' | 'sms' | 'email')[];
  filters: { discipline?: string; certs?: string[]; languages?: string[]; region?: string; available?: string };
  recipients: string[]; // candidate IDs
  responses: BroadcastResponse[];
  status: BroadcastStatus;
  assignedTo?: string;
  deadline?: string;
}

export const broadcasts: Broadcast[] = [
  {
    id: 'b-1', sentBy: 'Sem Goddijn', sentAt: 'gisteren, 11:20',
    type: 'shift',
    subject: 'Damen Vlissingen morgen 06:30, wie kan?',
    message: 'Hoi {name}, twee man uitgevallen bij Damen. MIG/MAG procedure, 8u shift, normale rate + spoed-toeslag. Reageer met JA/NEE.',
    channels: ['whatsapp', 'sms'],
    filters: { discipline: 'MIG/MAG', certs: ['VCA basis'], region: 'NL/BE', available: 'now' },
    recipients: ['c-001', 'c-008', 'c-002'],
    responses: [
      { candidateId: 'c-001', status: 'yes', respondedAt: '11:24', message: 'Ik kan morgen vanaf 06:30, geen probleem.' },
      { candidateId: 'c-008', status: 'yes', respondedAt: '11:31', message: 'Ja, kan starten 06:30.' },
      { candidateId: 'c-002', status: 'no', respondedAt: '11:42', message: 'Helaas, ben morgen al ingedeeld bij Petrochem.' },
    ],
    status: 'closed', assignedTo: 'c-001',
    deadline: 'gisteren, 18:00',
  },
  {
    id: 'b-2', sentBy: 'Rody Sinke', sentAt: 'vandaag, 08:55',
    type: 'urgent',
    subject: 'Spoed TIG Petrochem Botlek deze week',
    message: 'Hoi {name}, urgente opdracht in Botlek vanaf donderdag. TIG-procedure, RVS, offshore-ervaring een pré. Wie heeft tijd? JA/NEE/MISSCHIEN.',
    channels: ['whatsapp', 'email'],
    filters: { discipline: 'TIG', certs: ['TIG procedure'], region: 'NL', available: 'this-week' },
    recipients: ['c-003', 'c-005', 'c-010'],
    responses: [
      { candidateId: 'c-003', status: 'yes', respondedAt: '09:12', message: 'Beschikbaar vanaf donderdag.' },
      { candidateId: 'c-005', status: 'maybe', respondedAt: '09:34', message: 'Misschien, bel me ff.' },
      { candidateId: 'c-010', status: 'pending' },
    ],
    status: 'open',
    deadline: 'vandaag, 17:00',
  },
  {
    id: 'b-3', sentBy: 'Rody Sinke', sentAt: '3 dagen geleden',
    type: 'question',
    subject: 'Allround monteur Werkendam vrijdag',
    message: 'Wie heeft vrijdag een dag vrij voor enkele klusjes in Werkendam? Tekening lezen, bankwerk, lichte montage.',
    channels: ['whatsapp'],
    filters: { discipline: 'Constructiebankwerker', region: 'NL', available: 'this-week' },
    recipients: ['c-004', 'c-009'],
    responses: [
      { candidateId: 'c-004', status: 'yes', respondedAt: '+12 min', message: 'Ja kan ik doen.' },
      { candidateId: 'c-009', status: 'no', respondedAt: '+34 min' },
    ],
    status: 'closed', assignedTo: 'c-004',
  },
];

export const broadcastTemplates = [
  { id: 'tpl-1', label: 'Shift-overname', subject: 'Shift-overname {location} {date}', body: 'Hoi {name}, kun jij {date} de shift in {location} oppakken? {discipline}, normale rate + spoed-toeslag. JA/NEE?' },
  { id: 'tpl-2', label: 'Spoed-vacature', subject: 'Spoed: {discipline} bij {client}', body: 'Hoi {name}, urgente opdracht bij {client} vanaf {date}. {discipline}-ervaring vereist. Wie heeft tijd?' },
  { id: 'tpl-3', label: 'Beschikbaarheid-check', subject: 'Beschikbaarheid {month}', body: 'Hoi {name}, kun je laten weten of je in {month} beschikbaar bent voor opdrachten?' },
  { id: 'tpl-4', label: 'Custom', subject: '', body: '' },
];

// === DASHBOARD CHART DATA ===
export const placementsByMonth = [
  { m: 'jun', n: 8 }, { m: 'jul', n: 11 }, { m: 'aug', n: 9 },
  { m: 'sep', n: 14 }, { m: 'okt', n: 16 }, { m: 'nov', n: 13 },
  { m: 'dec', n: 10 }, { m: 'jan', n: 12 }, { m: 'feb', n: 17 },
  { m: 'mrt', n: 19 }, { m: 'apr', n: 15 }, { m: 'mei', n: 5 },
];

export const sourcingFunnel = [
  { stage: 'Sourced', n: 142, color: 'var(--color-status-sourced)' },
  { stage: 'In test', n: 86, color: 'var(--color-status-test)' },
  { stage: 'Gekwalificeerd', n: 64, color: 'var(--color-status-qualified)' },
  { stage: 'Geplaatst', n: 49, color: 'var(--color-status-placed)' },
];

export const testPassRate = { passed: 87, failed: 13 };

export const topVakgebieden = [
  { name: 'MIG/MAG', n: 18 },
  { name: 'TIG', n: 12 },
  { name: 'Pijpfitter', n: 9 },
  { name: 'CNC', n: 6 },
  { name: 'Plaatwerk', n: 4 },
];

// === CANDIDATE EXTRA: comms log + notes + docs ===
export const commsLog: Record<string, Array<{ at: string; channel: string; direction: 'in' | 'out'; text: string }>> = {
  'c-001': [
    { at: '2026-04-12 14:30', channel: 'WhatsApp', direction: 'out', text: 'Test geslaagd, 92/100. Damen-aanbieding klaar.' },
    { at: '2026-04-12 14:42', channel: 'WhatsApp', direction: 'in', text: 'Top, ik teken!' },
    { at: '2026-04-15 09:00', channel: 'Email', direction: 'out', text: 'Contract verstuurd ter ondertekening.' },
    { at: '2026-04-15 16:21', channel: 'Email', direction: 'in', text: 'Ondertekend retour.' },
    { at: '2026-04-22 10:15', channel: 'WhatsApp', direction: 'out', text: 'Hoe gaat het op locatie?' },
    { at: '2026-04-22 12:30', channel: 'WhatsApp', direction: 'in', text: 'Goed, fijne crew.' },
  ],
  'c-008': [
    { at: '2026-04-30 09:15', channel: 'Email', direction: 'in', text: 'Open sollicitatie ingediend met CV.' },
    { at: '2026-04-30 09:32', channel: 'Email', direction: 'out', text: 'Ontvangstbevestiging + intake-vragenlijst verstuurd.' },
  ],
};

export const candidateNotes: Record<string, Array<{ at: string; by: string; text: string }>> = {
  'c-001': [
    { at: '2026-03-28', by: 'Rody Sinke', text: 'Sterke referentie van vorige werkgever. Snelle leerling.' },
    { at: '2026-04-12', by: 'Arie', text: 'Test foutloos doorlopen. PA, PB, PC, PE allemaal goed.' },
    { at: '2026-04-15', by: 'Sem Goddijn', text: 'Damen wil hem direct, contract geregeld.' },
  ],
  'c-008': [
    { at: '2026-04-30', by: 'Recruiter NL', text: 'Tien jaar ervaring, NL-talig, sterke kandidaat. Test inplannen.' },
  ],
};

export const candidateDocs: Record<string, Array<{ name: string; size: string; uploaded: string }>> = {
  'c-001': [
    { name: 'CV-Pawel-Kowalski-2026.pdf', size: '184 KB', uploaded: '2026-03-28' },
    { name: 'Paspoort-PL.pdf', size: '892 KB', uploaded: '2026-03-28' },
    { name: 'MIG-MAG-cert-EN-9606-1.pdf', size: '256 KB', uploaded: '2026-04-12' },
    { name: 'VCA-basis-2024.pdf', size: '198 KB', uploaded: '2026-03-28' },
  ],
  'c-008': [
    { name: 'CV-Stefan-Mueller.pdf', size: '212 KB', uploaded: '2026-04-30' },
  ],
};
