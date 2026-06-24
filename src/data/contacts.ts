export const companyInfo = {
  headquarters: {
    title: 'Sídlo společnosti:',
    lines: [
      'PROKAT invest s.r.o.',
      'Plzeňská 1348/95, Praha 5',
      'IČ: 25238876, DIČ: CZ25238876',
      'Datová schránka: ns3u7ke',
      'Společnost je zapsaná v obchodním rejstříku:',
      'Městský soud v Praze, oddíl C, vložka 350481.',
    ],
  },
  bank: {
    title: 'Bankovní spojení:',
    lines: ['Česká spořitelna a.s., č.ú.: 9687152/0800.'],
  },
  operations: {
    title: 'Provozní středisko ÚT, ZTI:',
    lines: ['Kout na Šumavě 63, Kout na Šumavě.'],
  },
  technicalOffice: {
    title: 'Technická kancelář VZT, chlazení:',
    lines: ['Koterovská 290/9, Plzeň – Slovany.'],
  },
};

export type ContactPerson = {
  name: string;
  role: string;
  phone: string;
  email: string;
  location?: string;
};

export type ContactDepartment = {
  title: string;
  people: ContactPerson[];
};

export const contactDepartments: ContactDepartment[] = [
  {
    title: 'Vedení společnosti',
    people: [
      {
        name: 'Ing. Vladimír Škrlant',
        role: 'Majitel / Jednatel',
        phone: '+420 606 711 861',
        email: 'vladimir.skrlant@prokat.cz',
      },
      {
        name: 'Karel Dražan',
        role: 'Majitel / Jednatel',
        phone: '+420 724 572 350',
        email: 'karel.drazan@prokat.cz',
      },
    ],
  },
  {
    title: 'Obchodní oddělení',
    people: [
      {
        name: 'Ing. Jiří Kovář',
        role: 'Vedoucí obchodního úseku',
        phone: '+420 724 051 434',
        email: 'jiri.kovar@prokat.cz',
      },
      {
        name: 'Tomáš Kocman',
        role: '',
        phone: '+420 725 191 878',
        email: 'tomas.kocman@prokat.cz',
      },
      {
        name: 'Ing. Hana Kubátová',
        role: '',
        phone: '+420 606 065 244',
        email: 'hana.kubatova@prokat.cz',
      },
    ],
  },
  {
    title: 'Projekční oddělení',
    people: [
      {
        name: 'Ing. Lukáš Horváth',
        role: 'Projektant',
        phone: '+420 702 016 545',
        email: 'lukas.horvath@prokat.cz',
      },
    ],
  },
  {
    title: 'Realizační oddělení',
    people: [
      {
        name: 'Pavel Panýrek',
        role: 'Realizace vzduchotechniky',
        phone: '+420 602 698 494',
        email: 'pavel.panyrek@prokat.cz',
      },
      {
        name: 'Michal Čermák',
        role: 'Realizace vzduchotechniky',
        phone: '+420 602 486 521',
        email: 'michal.cermak@prokat.cz',
      },
      {
        name: 'Miroslav Dražan',
        role: 'Realizace vzduchotechniky',
        phone: '+420 602 486 521',
        email: 'miroslav.drazan@prokat.cz',
      },
      {
        name: 'Pavel Strádal',
        role: 'Vedoucí provozu ÚT, ZTI',
        phone: '+420 603 575 160',
        email: 'pavel.stradal@prokat.cz',
      },
      {
        name: 'Ing. Jaroslav Poláček',
        role: 'Vedoucí realizace topení a chlazení',
        phone: '+420 602 382 385',
        email: 'jaroslav.polacek@prokat.cz',
      },
    ],
  },
  {
    title: 'Servisní oddělení',
    people: [
      {
        name: 'Radek Sobański',
        role: 'Vedoucí servisního oddělení',
        phone: '+420 775 362 255',
        email: 'radek.sobanski@prokat.cz',
      },
      {
        name: 'Pavel Kotrba',
        role: 'Servisní technik',
        phone: '+420 725 445 899',
        email: 'pavel.kotrba@prokat.cz',
      },
    ],
  },
  {
    title: 'Ekonomické oddělení / Fakturace',
    people: [
      {
        name: 'Michaela Škorpová',
        role: 'Vedoucí účetní',
        phone: '+420 607 551 696',
        email: 'michaela.skorpova@prokat.cz',
      },
      {
        name: 'Lenka Zamazalová',
        role: 'Mzdová účetní',
        phone: '+420 605 733 298',
        email: 'lenka.zamazalova@prokat.cz',
      },
      {
        name: 'Ilona Jandečková',
        role: 'Fakturantka',
        phone: '+420 602 746 033',
        email: 'ilona.jandeckova@prokat.cz',
      },
      {
        name: 'Marcela Kastlová',
        role: 'Senior referent',
        phone: '+420 725 590 606',
        email: 'marcela.kastlova@prokat.cz',
      },
    ],
  },
  {
    title: 'Personální a marketingové oddělení',
    people: [
      {
        name: 'Petra Palánová',
        role: 'Asistentka jednatele pro Plzeň',
        phone: '+420 720 075 410',
        email: 'petra.palanova@prokat.cz',
      },
    ],
  },
  {
    title: 'Sklad, zázemí a provozní středisko Plzeň',
    people: [
      {
        name: 'Jaromír Hamet',
        role: '',
        phone: '+420 702 266 776',
        email: 'plzen@prokat.cz',
        location: 'PLZEŇ',
      },
      {
        name: 'Jan Mašek',
        role: '',
        phone: '+420 775 285 096',
        email: 'plzen@prokat.cz',
        location: 'PLZEŇ',
      },
      {
        name: 'Pavla Zdeňková',
        role: '',
        phone: '+420 724 037 081',
        email: 'pavla.zdenkova@prokat.cz',
        location: 'KOUT NA ŠUMAVĚ',
      },
    ],
  },
  {
    title: 'RTCH/ZTI – Kout na Šumavě',
    people: [
      {
        name: 'Pavla Zdeňková',
        role: '',
        phone: '+420 724 037 081',
        email: 'pavla.zdenkova@prokat.cz',
        location: 'KOUT NA ŠUMAVĚ',
      },
    ],
  },
];
