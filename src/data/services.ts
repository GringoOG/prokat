export type ServiceCapability = {
  title: string;
  items: string[];
};

export type ServiceBenefit = {
  title: string;
  description: string;
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceDetail = {
  slug: string;
  title: string;
  description: string;
  /** Listing / card / detail hero photo */
  image: string;
  /** Technology schema shown below overview, above benefits */
  heroImage: string;
  overviewTitle: string;
  overview: string[];
  benefits: ServiceBenefit[];
  capabilities: ServiceCapability[];
  faqs: ServiceFaq[];
  listPoints: string[];
  ariaLabel: string;
};

export const processSteps = [
  { step: 'Krok 1', title: 'Návrh a projektování' },
  { step: 'Krok 2', title: 'Precizní odborná montáž' },
  { step: 'Krok 3', title: 'Finální revize a spuštění' },
] as const;

export const services: ServiceDetail[] = [
  {
    slug: 'vzduchotechnika',
    title: 'Vzduchotechnika',
    description:
      'Realizace VZT systémů s rekuperací, inteligentní regulací a garancí mikroklimatických podmínek.',
    image: '/images/service-hvac.jpg',
    heroImage: '/images/service-schema-vzt.jpg',
    overviewTitle: 'Realizace VZT',
    overview: [
      'Naše realizační služby v oblasti VZT kombinují nejmodernější technologie s týmem zkušených techniků pro instalaci systémů, které splňují nejvyšší průmyslové standardy. S využitím pokročilých rekuperačních jednotek a inteligentních prvků regulace realizujeme vše od jednoduchých projektů po technologicky náročné celky s nekompromisní přesností.',
      'Díky přísnému dodržování projekčních parametrů a důsledné kontrole kvality v každé fázi montáže garantujeme, že každý systém bude odpovídat vašim přesným požadavkům. Ať už jde o menší administrativní prostory nebo rozsáhlé průmyslové haly, naše VZT systémy zajišťují maximální efektivitu, provozní spolehlivost a nákladovou úspornost.',
      'Integrací moderních komponentů, prací zkušených montážníků a dodržováním přísných technologických postupů dodáváme celky připravené k okamžitému spuštění, bezproblémovému provozu nebo integraci do nadřazených systémů budov.',
    ],
    benefits: [
      {
        title: 'Garance mikroklimatických podmínek',
        description:
          'Vzdálený dohled, řízení, prediktivní analýza údržby a optimalizace, notifikace, adaptivní autonomní řízení a další.',
      },
      {
        title: 'Přizpůsobení provozním režimům',
        description:
          'Naše systémy jsou připraveny na integraci do stávajících platforem řízení budov (BMS) pomocí standardizovaných protokolů.',
      },
      {
        title: 'Rekuperace tepla a chladu',
        description:
          'Řízení systémů optimalizuje pomocí AI modulu provozní spotřeby VZT zařízení.',
      },
      {
        title:
          'Garance úzkých pásem tolerance mikroklimatických podmínek pro technologické procesy',
        description:
          'Je to zejména stěžejní pro technologie výroby, kdy na úzkých pásmech tolerancí závisí produkce výrobku.',
      },
    ],
    capabilities: [
      {
        title: 'Technické specifikace',
        items: [
          'Materiálové provedení potrubí: Pozink, nerez, plast, izolované PUR materiál',
          'Třída těsnosti: Standardně třída B a C dle EN 12237',
          'Filtrace vzduchu: Od G4 až po HEPA filtry pro čisté prostory',
          'Protihlukové opatření: Integrované tlumiče hluku',
          'Povrchová odolnost: Antikorozní úprava a chemická odolnost potrubí, plastové a nerez potrubí',
        ],
      },
      {
        title: 'Vybavení a technologie',
        items: [
          'Jednotky: Rekuperace tepla pomocí deskových nebo rotačních rekuperátorů 80 %',
          'Regulace: Regulace s možností nadstavby řízení AI managementem',
          'Distribuce: Simulace proudění vzduchu',
          'Měření: teplot, vlhkosti, CO₂, diferenčních tlaků atd.',
          'Pohony: Úsporné EC motory ventilátorů s plynulou regulací',
        ],
      },
      {
        title: 'Klíčové ukazatele (KPI)',
        items: [
          'Výměna vzduchu: Dle hygienických norem a typu provozu',
          'Energetická bilance: Návrh provozně hospodárného řešení',
          'Spolehlivost: 24/7 monitoring pomocí nadřazeného systému (BMS)',
          'Udržitelnost: Splnění standardů EcoDesign',
          'Předání: Proměření vzduchových výkonů',
        ],
      },
    ],
    faqs: [
      {
        question: 'Jaký je hlavní přínos rekuperace v komerčních objektech?',
        answer:
          'Rekuperace umožňuje zpětné získávání tepla z odváděného vzduchu, čímž snižuje náklady na vytápění až o 30 %. Zároveň zajišťuje neustálý přísun čerstvého vzduchu bez nutnosti větrání okny a vzniku průvanu.',
      },
      {
        question: 'Jak zajišťujete tichý chod VZT systému v kancelářích?',
        answer:
          'Navrhujeme protihluková opatření včetně tlumičů, vhodné dimenzování potrubí a otáček ventilátorů a umístění jednotek mimo citlivé zóny. Výsledkem je komfortní provoz bez rušivého hluku.',
      },
      {
        question: 'Dokáže vzduchotechnika v létě prostory i ochlazovat?',
        answer:
          'Ano. Systém lze doplnit o chladicí výměník nebo propojit s chladicím okruhem, případně využít noční předchlazení. Konkrétní řešení vždy navrhujeme podle tepelné zátěže objektu.',
      },
      {
        question: 'Jak náročná je údržba a výměna filtrů?',
        answer:
          'Interval výměny závisí na typu filtrace a prostředí — obvykle několikrát ročně. Nabízíme servisní smlouvy včetně výměny filtrů, kontroly rekuperace a vzdáleného dohledu.',
      },
      {
        question: 'Lze systém VZT ovládat vzdáleně nebo automaticky?',
        answer:
          'Ano. Standardně připravujeme regulaci s možností vzdáleného přístupu a integrace do BMS. Systém pak řídí provoz autonomně podle teploty, CO₂, vlhkosti a provozních režimů.',
      },
    ],
    listPoints: [
      'Garance mikroklimatických podmínek',
      'Garance úzkých pásem tolerance mikroklimatických podmínek pro technologické procesy',
      'Přizpůsobení provozním režimům',
      'Rekuperace tepla a chladu',
    ],
    ariaLabel: 'Více o vzduchotechnice',
  },
  {
    slug: 'topne-zdroje',
    title: 'Topné zdroje',
    description:
      'Montáž a integrace topných zdrojů — kotelny, tepelná čerpadla a bivalentní systémy s AI řízením.',
    image: '/images/service-heating.jpg',
    heroImage: '/images/service-schema-heating.jpg',
    overviewTitle: 'Odborná montáž a integrace technologií',
    overview: [
      'Naše služby v oblasti montáže propojují precizní řemeslné zpracování s moderními technologickými postupy. Dodáváme plně integrované celky, které splňují nejnáročnější průmyslové standardy. Od dílčích sestav až po komplexní vícekomponentní systémy (jako jsou kotelny či chladicí strojovny) garantujeme přesnost, spolehlivost a bezchybnou funkčnost.',
      'Díky přísným kontrolám kvality v každé fázi realizace náš tým zaručuje, že každá instalace přesně odpovídá projektové dokumentaci a vašim specifickým požadavkům. Využíváme optimalizované procesy a certifikované montážní protokoly, díky čemuž dosahujeme vysoké efektivity realizace při zachování maximální kvality díla.',
      'Kombinací zkušených techniků, prověřených pracovních postupů a komplexního testování dodáváme technologické celky, které jsou okamžitě připraveny k ostrému provozu. Ať už se jedná o specifické technologické prototypy nebo rozsáhlé průmyslové instalace, naše montážní služby zajišťují konzistenci, přesnost a provozní excelenci.',
    ],
    benefits: [
      {
        title: 'Výpočty spotřeb tepla dle norem',
        description:
          'Přenos a úprava teoretických výpočtů do praxe na základě dlouholetých zkušeností, které jsou podloženy měřením jednotlivých funkčních energetických celků.',
      },
      {
        title: 'Provozní náklady',
        description:
          'Optimalizace provozních nákladů na provoz na základě predikce cen energií pro nákup v nejlevnějších tržních slotech.',
      },
      {
        title: 'Alternativní zdroje tepla',
        description:
          'Použití různých zdrojů tepla a jejich kombinace jako jsou plynové kotelny, tepelná čerpadla, FVE, odpadní teplo atd.',
      },
      {
        title: 'Rekuperace tepla',
        description:
          'Všechno odpadní teplo je v zimě rekuperováno nejenom z topných zdrojů, ale i např. od kompresorů, kondenzátorů, odpadní vody z wellness atd.',
      },
    ],
    capabilities: [
      {
        title: 'Synergie precizní instalace a inteligentního řízení (MaR)',
        items: [
          'Odborná a automatizovaná montáž',
          'Preciznost a efektivita',
          'Špičková kvalita realizací',
          'Škálovatelný rozsah řešení',
          'Integrace technologických celků',
        ],
      },
      {
        title: 'Garantovaná kvalita realizací',
        items: [
          'Funkční a individuální zkoušky',
          'Záruka provozní spolehlivosti',
          'Včasná detekce technologických vad',
          'Soulad s normami a předpisy',
          'Garantovaná kvalita realizace',
        ],
      },
      {
        title: 'Kompletace technologií a projektová logistika',
        items: [
          'Ochranné balení na míru',
          'Bezpečná přeprava',
          'Profesionální prezentace produktu',
          'Optimalizace dodavatelského řetězce',
          'Design v souladu s firemní identitou',
        ],
      },
    ],
    faqs: [
      {
        question: 'Jak probíhá předmontážní příprava a inženýring?',
        answer:
          'V rámci předmontážní přípravy se soustředíme na eliminaci rizik ještě před samotným nástupem na stavbu. Naši inženýři detailně prověřují shodu projektu s realitou, konfigurují software řídicích systémů a zajišťují kompletní logistiku komponentů tak, aby montáž na místě proběhla plynule a bez nečekaných vícenákladů. Tento proces nám umožňuje garantovat vysokou kvalitu instalace a přísné dodržení dohodnutého harmonogramu.',
      },
      {
        question: 'Jaké typy technologických celků a instalací realizujete?',
        answer:
          'Realizujeme plynové a kondenzační kotelny, tepelná čerpadla, bivalentní systémy i komplexní strojovny včetně napojení na MaR a nadřazené řízení budovy.',
      },
      {
        question: 'Jakým způsobem kontrolujete kvalitu prováděných montáží a instalací?',
        answer:
          'Každá fáze prochází kontrolními body dle projektové dokumentace. Před předáním provádíme funkční a individuální zkoušky, měření a protokolaci výsledků.',
      },
      {
        question: 'Realizujete zakázky malého i velkého rozsahu?',
        answer:
          'Ano. Od menších technologických sestav po rozsáhlé průmyslové instalace — rozsah přizpůsobíme vašemu projektu a harmonogramu.',
      },
      {
        question: 'Pro která odvětví realizujete technologické instalace a celky?',
        answer:
          'Dodáváme řešení pro průmysl, administrativu, retail i speciální provozy. Technologie vždy navrhujeme s ohledem na provozní režim a energetickou hospodárnost.',
      },
    ],
    listPoints: [
      'Alternativní zdroje tepla',
      'Provozní náklady',
      'Rekuperace tepla',
      'Výpočty spotřeb tepla dle norem',
    ],
    ariaLabel: 'Více o topných zdrojích',
  },
  {
    slug: 'chlazeni',
    title: 'Chlazení',
    description:
      'Návrh, montáž a servis chladicích celků — chillery, VRV/VRF i přírodní chladiva.',
    image: '/images/service-cooling.png',
    heroImage: '/images/service-schema-cooling.jpg',
    overviewTitle: 'Montáž chladicích celků',
    overview: [
      'Naše služby v chlazení spojují moderní technologie a zkušené techniky k proměně plánů v přesné, vysoce kvalitní celky. Od návrhu, montáže a zapojení až po svařování a revize řešíme každou fázi s přesností a důsledností.',
      'S přísnou kontrolou kvality v každém kroku zajišťujeme, že každý díl splňuje přesné zadání a průmyslové normy. Ať jde o prototypová řešení nebo rozsáhlé instalace, naše procesy přinášejí spolehlivá, odolná a efektivní řešení. Díky integraci moderní chladicí techniky s odborným řemeslem dodáváme hotové systémy připravené k montáži, provozu nebo koncovému využití v budovách.',
    ],
    benefits: [
      {
        title: 'Studie vhodnosti použití způsobu chlazení jednotlivých aplikací',
        description:
          'Vypracování různých návrhů a možností zdrojů chladu, jejich porovnání a vyhodnocení.',
      },
      {
        title: 'Provozní náklady',
        description:
          'Hlídání provozních nákladů pomocí vzdáleného přístupu a vyhodnocování trendů za pomocí AI.',
      },
      {
        title: 'Rekuperace a akumulace chladu',
        description:
          'Využíváme všech možností pro rekuperaci chladu např. z odtahovaného vzduchu nebo akumulace chladu v případě, že jsou nízké spotové ceny energie nebo jsou přetoky z výroby FVE.',
      },
      {
        title: 'Použití chladiv s nízkým koeficientem GWP (vliv chladiva na ozónovou díru)',
        description:
          'Naším krédem je využití chladiv, které mají minimální dopad na životní prostředí.',
      },
    ],
    capabilities: [
      {
        title: 'Návrh a projekce',
        items: [
          'Výpočty tepelných zátěží objektů',
          'Návrhy chillerů a VRV/VRF systémů',
          'Optimalizace energetické náročnosti',
          'Projektová dokumentace na míru',
        ],
      },
      {
        title: 'Instalace a montáž',
        items: [
          'Montáž rozvodů chladiv a potrubí',
          'Usazení a zapojení venkovních jednotek',
          'Integrace do systémů MaR (měření a regulace)',
          'Kompletní realizace od A do Z',
        ],
      },
      {
        title: 'Servis a údržba',
        items: [
          'Pravidelné revize úniků chladiva',
          'Čištění a dezinfekce výměníků',
          'Diagnostika a opravy kompresorů',
          'Záruční i pozáruční odborný servis',
        ],
      },
    ],
    faqs: [
      {
        question: 'Jaký systém chlazení je nejvhodnější pro náš typ objektu?',
        answer:
          'Navrhneme řešení na míru podle účelu budovy, od VRV systémů pro administrativu po výkonné chillery pro průmysl. Výběr vždy podkládáme přesným výpočtem tepelné zátěže.',
      },
      {
        question: 'Jak lze u chladicích systémů snížit provozní náklady?',
        answer:
          'Pomocí správného dimenzování, frekvenčních pohonů, rekuperace tepla a inteligentního řízení provozu. Často dosahujeme úspory 10–20 % oproti neřízenému provozu.',
      },
      {
        question: 'Jak často je nutné provádět servis a revize?',
        answer:
          'Doporučujeme pravidelný servis alespoň jednou ročně, u náročných provozů častěji. Revize úniků chladiva a kontrola výměníků jsou klíčové pro účinnost i legislativní shodu.',
      },
      {
        question: 'Lze využít odpadní teplo vznikající při chlazení?',
        answer:
          'Ano. Odpadní teplo lze využít například pro ohřev TUV nebo předehřev vzduchu. Návrh rekuperace vždy posuzujeme jako součást energetické koncepce objektu.',
      },
      {
        question: 'Instalujete chlazení i do stávajících provozů?',
        answer:
          'Ano. Umíme doplnit nebo modernizovat chlazení za provozu s minimálními odstávkami — včetně napojení na stávající MaR a rozvody.',
      },
    ],
    listPoints: [
      'Použití chladiv s nízkým koeficientem GWP (vliv chladiva na ozónovou díru)',
      'Provozní náklady',
      'Rekuperace a akumulace chladu',
      'Studie vhodnosti použití způsobu chlazení jednotlivých aplikacích',
    ],
    ariaLabel: 'Více o chlazení',
  },
  {
    slug: 'fotovoltaika',
    title: 'Fotovoltaika',
    description:
      'Instalace FVE od střešních řešení po systémy s bateriovým úložištěm a AI monitoringem.',
    image: '/images/service-solar.png',
    heroImage: '/images/service-schema-solar.jpg',
    overviewTitle: 'Instalace FVE',
    overview: [
      'Naše služby v oblasti instalace FVE propojují precizní řemeslné zpracování s pokročilými technologickými postupy, abychom dodali energetické celky splňující nejvyšší průmyslové standardy. Od jednoduchých střešních instalací až po komplexní systémy s bateriovým úložištěm zajišťujeme přesnost, spolehlivost a bezproblémovou funkčnost celého řešení.',
      'Díky přísné kontrole kvality v každé fázi realizace garantujeme, že každá komponenta splňuje přesné technické specifikace a výkonnostní požadavky. Naše certifikované procesy a optimalizované harmonogramy montáží zaručují vysokou efektivitu, provozní bezpečnost a nákladově efektivní výrobu vlastní elektrické energie.',
      'Integrací moderních fotovoltaických technologií, odborného řemesla a důkladného testování před spuštěním dodáváme systémy připravené k okamžitému provozu, distribuci energie nebo integraci do celkového energetického managementu vaší budovy.',
    ],
    benefits: [
      {
        title: 'Volba velikosti FVE s ohledem na návratnost',
        description:
          'Nejdůležitější skutečností při návrhu FVE je určení využitelnosti její výroby s ohledem na spotřebu a návratnost investice.',
      },
      {
        title: 'Ukládání energie do baterek, sdílení energie',
        description:
          'Využití nadvýroby z FVE pro pozdější využití, kdy FVE již nevyrábí z důvodu klimatických podmínek nebo noci.',
      },
      {
        title: 'Analýza trendů',
        description:
          'Vzdálená správa FVE s vyhodnocováním trendů pomocí AI modelu je garancí optimální využitelnosti vyráběné energie a její použití v ostatních systémech budovy.',
      },
      {
        title: 'Servisní činnost',
        description:
          'Nepostradatelnou činností je pravidelný servis FVE, který zabezpečí nejenom bezporuchový chod, ale i bezpečnost systému.',
      },
    ],
    capabilities: [
      {
        title: 'Komponenty a materiály',
        items: [
          'Panely: Monokrystalické Tier-1 panely s vysokou účinností',
          'Střídače: Hybridní i síťové asymetrické střídače (High-voltage)',
          'Akumulace: LiFePO₄ bateriová úložiště s dlouhou životností',
          'Konstrukce: Certifikované systémy pro šikmé i ploché střechy',
          'Kabeláž: UV stabilní solární vodiče s vysokou odolností',
        ],
      },
      {
        title: 'Procesy a technologie',
        items: [
          'Monitoring: Cloudové sledování výroby a spotřeby v reálném čase',
          'Bezpečnost: Rychlé vypnutí (Rapid Shutdown) a protipožární ochrana',
          'Optimalizace: Instalace výkonových optimizérů pro zastíněné plochy',
          'Integrace: Zapojení do ohřevu TUV nebo řízení zátěže (MaR)',
          'Backup: Konfigurace záložního napájení pro případ výpadku sítě',
        ],
      },
      {
        title: 'Kvalita a efektivita',
        items: [
          'Preciznost: Přesné statické posouzení a revize elektro',
          'Výtěžnost: Maximalizace zisku energie díky orientaci a sklonu',
          'Rychlost: Optimalizovaný harmonogram montáže a zprovoznění',
          'Servis: Vzdálená diagnostika a pravidelná údržba polí',
          'Udržitelnost: Minimalizace přetoků do sítě díky chytrému řízení',
        ],
      },
    ],
    faqs: [
      {
        question: 'Jaká je návratnost investice do firemní FVE?',
        answer:
          'Návratnost se obvykle pohybuje mezi 5 až 8 lety v závislosti na míře vlastní spotřeby a aktuálních cenách energií. S využitím dotačních titulů lze tuto dobu ještě výrazně zkrátit.',
      },
      {
        question: 'Funguje fotovoltaika i při výpadku distribuční sítě?',
        answer:
          'U hybridních systémů s baterií a správnou konfigurací backup režimu ano — vybrané okruhy mohou běžet i při výpadku sítě. Čistě síťové střídače bez ostrovní funkce při blackoutu obvykle vypínají.',
      },
      {
        question: 'Je nutné před instalací posilovat statiku střechy?',
        answer:
          'Ne vždy. Nejprve zpracujeme statické posouzení. Pokud stávající konstrukce nevyhoví, navrhneme úpravy nebo alternativní umístění (např. přístřešky, fasády, volný terén).',
      },
      {
        question: 'Jaký je rozdíl mezi hybridním a síťovým střídačem?',
        answer:
          'Síťový střídač dodává energii do spotřeby a přebytky do sítě. Hybridní střídač navíc řídí baterii, umožňuje zálohování a maximalizuje vlastní spotřebu.',
      },
      {
        question: 'Jak probíhá vyřízení dotací a legislativy?',
        answer:
          'Pomůžeme s přípravou podkladů, výběrem dotačního titulu a administrací. Zajistíme také potřebné revize a dokumentaci pro připojení k distribuční soustavě.',
      },
    ],
    listPoints: [
      'Analýza trendů',
      'Servisní činnost',
      'Ukládání energie do baterek, sdílení energie',
      'Volba velikosti FVE s ohledem na návratnost',
    ],
    ariaLabel: 'Více o fotovoltaice',
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function serviceHref(slug: string) {
  return `/sluzby/${slug}`;
}
