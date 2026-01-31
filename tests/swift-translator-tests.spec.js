const { test, expect } = require('@playwright/test');

const CONFIG = {
  url: 'https://www.swifttranslator.com/',
  timeouts: {
    pageLoad: 2000,
    afterClear: 1000,
    translation: 3000,
    betweenTests: 2000
  },
  selectors: {
    inputField: 'Input Your Singlish Text Here.',
    outputContainer: 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
  }
};

const TEST_DATA = {
  positive: [
    {
      tcId: 'Pos_Fun_0001',
      name: 'Convert compound sentence with informal comma',
      input: 'mama sellam karanna yanavaa ,oyath kaemathinam enna puLuvan.',
      expected: 'මම සෙල්ලම් කරන්න යනවා ,ඔයත් කැමතිනම් එන්න පුළුවන්.'
    },
    {
      tcId: 'Pos_Fun_0002',
      name: 'Convert complex conditional sentence',
      input: 'kaalaya siimitha vunath api vaedee ivara karanna epaeyi.',
      expected: 'කාලය සීමිත වුනත් අපි වැඩේ ඉවර කරන්න එපැයි.'
    },
    {
      tcId: 'Pos_Fun_0003',
      name: 'Convert interrogative request sentence',
      input: 'oyaata vaeda karalaa ivara karanna puluvandha?',
      expected: 'ඔයාට වැඩ කරලා ඉවර කරන්න පුලුවන්ද?'
    },
    {
      tcId: 'Pos_Fun_0004',
      name: 'Convert short imperative command',
      input: 'vahaama eliyata enna.',
      expected: 'වහාම එලියට එන්න.'
    },
    {
      tcId: 'Pos_Fun_0005',
      name: 'Convert positive ability statement',
      input: 'oyaata puLuvan haemadheema pilivelata karanna.',
      expected: 'ඔයාට පුළුවන් හැමදේම පිලිවෙලට කරන්න.'
    },
    {
      tcId: 'Pos_Fun_0006',
      name: 'Convert greeting phrase',
      input: 'oyaata suba dhavasak!',
      expected: 'ඔයාට සුබ දවසක්!'
    },
    {
      tcId: 'Pos_Fun_0007',
      name: 'Convert affirmative response with future tense',
      input: 'hari,mama ee gaena balaagannam.',
      expected: 'හරි,මම ඒ ගැන බලාගන්නම්.'
    },
    {
      tcId: 'Pos_Fun_0008',
      name: 'Convert polite request with space variation',
      input: 'karuNaakaralaa oyaata hithena dheeval mata  kiyanna.',
      expected: 'කරුණාකරලා ඔයාට හිතෙන දේවල් මට  කියන්න.'
    },
    {
      tcId: 'Pos_Fun_0009',
      name: 'Convert informal imperative phrase',
      input: 'hayiyen kathaakarapan.',
      expected: 'හයියෙන් කතාකරපන්.'
    },
    {
      tcId: 'Pos_Fun_0010',
      name: 'Convert common day-to-day expression',
      input: 'mata mahansi.',
      expected: 'මට මහන්සි.'
    },
    {
      tcId: 'Pos_Fun_0011',
      name: 'Convert location-based imperative',
      input: 'mehe balanna.',
      expected: 'මෙහෙ බලන්න.'
    },
    {
      tcId: 'Pos_Fun_0012',
      name: 'Convert repeated word expression for emphasis',
      input: 'kanna kanna aethitharam,oyaata thamayi mee palathuru seerama genaavee.',
      expected: 'කන්න කන්න ඇතිතරම්,ඔයාට තමයි මේ පලතුරු සේරම ගෙනාවේ.'
    },
    {
      tcId: 'Pos_Fun_0013',
      name: 'Convert past tense narrative',
      input: 'mama iiyee gedharata badu tikak geenna eliyata giyaa.',
      expected: 'මම ඊයේ ගෙදරට බඩු ටිකක් ගේන්න එලියට ගියා.'
    },
    {
      tcId: 'Pos_Fun_0014',
      name: 'Convert present tense activity description',
      input: 'api mal paela valata vathura dhaanavaa.',
      expected: 'අපි මල් පැල වලට වතුර දානවා.'
    },
    {
      tcId: 'Pos_Fun_0015',
      name: 'Convert future plan with specific date',
      input: 'api labana maasayee aluth gedharakata padhiQQchiyata yanavaa.',
      expected: 'අපි ලබන මාසයේ අලුත් ගෙදරකට පදිංචියට යනවා.'
    },
    {
      tcId: 'Pos_Fun_0016',
      name: 'Convert negative desire statement',
      input: 'mata eeka karanna aasaavak naehae.',
      expected: 'මට ඒක කරන්න ආසාවක් නැහැ.'
    },
    {
      tcId: 'Pos_Fun_0017',
      name: 'Convert third-person singular description',
      input: 'aeya harima  lassanata narThanaya idhiripath karaa.',
      expected: 'ඇය හරිම  ලස්සනට නර්ථනය ඉදිරිපත් කරා.'
    },
    {
      tcId: 'Pos_Fun_0018',
      name: 'Convert polite request with conditional',
      input: 'puLuvannam mata aehenna paththaraya kiyavanna.',
      expected: 'පුළුවන්නම් මට ඇහෙන්න පත්තරය කියවන්න.'
    },
    {
      tcId: 'Pos_Fun_0019',
      name: 'Convert mixed language with brand names',
      input: 'mama oyaava TikTok ekee follow karalaa thiyenne.oyaa hari lassanata content karanavaa.mata oyaava contact karaganna WhatsApp number eka dhenna puluvandha?',
      expected: 'මම ඔයාව TikTok එකේ follow කරලා තියෙන්නෙ.ඔයා හරි ලස්සනට content කරනවා.මට ඔයාව contact කරගන්න WhatsApp number එක දෙන්න පුලුවන්ද?'
    },
    {
      tcId: 'Pos_Fun_0020',
      name: 'Convert time format with English abbreviation',
      input: 'api heta 8.30 AM ta thiyena train ekee tickets book karalaa gamata yamudha.',
      expected: 'අපි හෙට 8.30 AM ට තියෙන train එකේ tickets book කරලා ගමට යමුද.'
    },
    {
      tcId: 'Pos_Fun_0021',
      name: 'Convert technical terms with file formats',
      input: 'haemooma ee video eka MP4 valin download karalaa MP3 valata convert karaganna.',
      expected: 'හැමෝම ඒ video එක MP4 වලින් download කරලා MP3 වලට convert කරගන්න.'
    },
    {
      tcId: 'Pos_Fun_0022',
      name: 'Convert exclamatory sentence with negation',
      input: 'apoo! eyaa ee tharam napuru kenek kiyalaa hithannavath baehae.',
      expected: 'අපෝ! එයා ඒ තරම් නපුරු කෙනෙක් කියලා හිතන්නවත් බැහැ.'
    },
    {
      tcId: 'Pos_Fun_0023',
      name: 'Convert currency format with English terms',
      input: 'competition eken win karapu nisaa eyaata Rs.5000 k vatina voucher ekak hambunaa.',
      expected: 'competition එකෙන් win කරපු නිසා එයාට Rs.5000 ක් වටින voucher එකක් හම්බුනා.'
    },
    {
      tcId: 'Pos_Fun_0024',
      name: 'Convert date format with month name',
      input: 'agoosthu 2 magee upandhinaya nisaa Lamaa nivaasayakata dhaanayak dhenna mama thiiraNaya karaa.',
      expected: 'අගෝස්තු 2 මගේ උපන්දිනය නිසා ළමා නිවාසයකට දානයක් දෙන්න මම තීරණය කරා.'
    },
    {
      tcId: 'Pos_Fun_0025',
      name: 'Convert measurement units with quantities',
      input: 'ammaa kivvaa mata kadeeta gihin parippu 1kg ekak geenna kiyalaa.',
      expected: 'අම්මා කිව්වා මට කඩේට ගිහින් පරිප්පු 1kg එකක් ගේන්න කියලා.'
    },
    {
      tcId: 'Pos_Fun_0026',
      name: 'Convert multi-line input with line breaks',
      input: 'haemadheema pilivelayi. \noyaalaa lassanata gedhara sarasalaa thiyenavaa.',
      expected: 'හැමදේම පිලිවෙලයි. \nඔයාලා ලස්සනට ගෙදර සරසලා තියෙනවා.'
    },
    {
      tcId: 'Pos_Fun_0027',
      name: 'Convert slang and colloquial expression',
      input: 'adoo siraavata,uba nam supirima yaaluvek baQQ.',
      expected: 'අඩෝ සිරාවට,උබ නම් සුපිරිම යාලුවෙක් බං.'
    },
    {
      tcId: 'Pos_Fun_0028',
      name: 'Convert long paragraph input',
      input: 'vaedamuluva sisunta lassana ath dhaekiimak ganna puLuvan vidhihata saQQviDhaayaka maNdalaya eya saQQviDhaanaya kara thibiima gaena guruvarun ovunta sthuthiyi kara athara ,vidhuhalpathivarayaadha saQQviDhaayaka maNdalaya aegayiimata lakkara thaeegi booga dhiimata dha amathaka nokaleaya. vaedamuluven laebuna athdhaekiim piLibaDHA sisungee hodha adhahas sahitha thundu kihipayak dha laebiithibiima gaena  saQQviDhaayaka maNdalayadha bohoo see sathutu vuuvaaya.',
      expected: 'වැඩමුලුව සිසුන්ට ලස්සන අත් දැකීමක් ගන්න පුළුවන් විදිහට සංවිධායක මණ්ඩලය එය සංවිධානය කර තිබීම ගැන ගුරුවරුන් ඔවුන්ට ස්තුතියි කර අතර ,විදුහල්පතිවරයාද සංවිධායක මණ්ඩලය ඇගයීමට ලක්කර තෑගි බෝග දීමට ද අමතක නොකලේය. වැඩමුලුවෙන් ලැබුන අත්දැකීම් පිළිබඳ සිසුන්ගේ හොද අදහස් සහිත තුන්ඩු කිහිපයක් ද ලැබීතිබීම ගැන  සංවිධායක මණ්ඩලයද බොහෝ සේ සතුටු වූවාය.'
    }
  ],
  
  negative: [
    {
      tcId: 'Neg_Fun_0001',
      name: 'Test joined words without spaces (robustness)',
      input: 'hetaapipansaleesilsamaadhanvennayamu.',
      expected: 'හෙටඅපිපන්සලේසිල්සමාදන්වෙන්නයමු.'
    },
    {
      tcId: 'Neg_Fun_0002',
      name: 'Test mixed English sentence start',
      input: 'his name is shaavinga.oyaa eyaava dhannavadha?',
      expected: 'his name is ශාවින්ග.ඔයා එයාව දන්නවද?'
    },
    {
      tcId: 'Neg_Fun_0003',
      name: 'Test English word preservation in context',
      input: 'eeka mata jiivithee laebuNa harima real experience ekak, eeka mata godak dheeval igaenvuvaa.',
      expected: 'ඒක මට ජීවිතේ ලැබුණ හරිම real experience එකක්, ඒක මට ගොඩක් දේවල් ඉගැන්වුවා.'
    },
    {
      tcId: 'Neg_Fun_0004',
      name: 'Test English emotion term preservation',
      input: 'adha dhavasa puraama mata heethuvak naethi sad mood ekak thiyenavaa, eeka nisaa kisi dheyak karanna hithennee naehae.',
      expected: 'අද දවස පුරාම මට හේතුවක් නැති sad mood එකක් තියෙනවා, ඒක නිසා කිසි දෙයක් කරන්න හිතෙන්නේ නැහැ.'
    },
    {
      tcId: 'Neg_Fun_0005',
      name: 'Test English compound term preservation',
      input: 'mama sea view ekak  thiyena hotel room ekak  thamayi book karee.',
      expected: 'මම sea view එකක්  තියෙන hotel room එකක්  තමයි book කරේ.'
    },
    {
      tcId: 'Neg_Fun_0006',
      name: 'Test English sentence start with pronoun',
      input: 'I am rashmi. mokakdha oyaagee nama ?',
      expected: 'I am රශ්මි. මොකක්ද ඔයාගේ නම ?'
    },
    {
      tcId: 'Neg_Fun_0007',
      name: 'Test English common phrase preservation',
      input: 'oya a hari apuuruvata step by step eeka paehaedhili karalaa thiyenavaa.',
      expected: 'ඔයා හරි අපූරුවට step by step ඒක පැහැදිලි කරලා තියෙනවා.'
    },
    {
      tcId: 'Neg_Fun_0008',
      name: 'Test English compound noun preservation',
      input: 'Day outing package ekata swimming pool access laebena nisaa apita hodhata vinoodha venna puLuvan.',
      expected: 'Day outing package එකට swimming pool access ලැබෙන නිසා අපිට හොදට විනෝද වෙන්න පුළුවන්.'
    },
    {
      tcId: 'Neg_Fun_0009',
      name: 'Test English noun preservation with comma',
      input: 'mama tikak eliyata aevillaa inne ,door eka open karalaa athulata yanna.',
      expected: 'මම ටිකක් එලියට ඇවිල්ලා ඉන්නේ ,door එක open කරලා අතුලට යන්න.'
    },
    {
      tcId: 'Neg_Fun_0010',
      name: 'Test English adjective preservation',
      input: 'oyaagee kind behavior eka nisaa  haemooma oyaata aadhareyi.',
      expected: 'ඔයාගේ kind behavior එක නිසා  හැමෝම ඔයාට ආදරෙයි.'
    }
  ],
  
  ui: [
    {
      tcId: 'Pos_UI_0001',
      name: 'Preserve formatting when multiple spaces are entered',
      input: 'api        kanna         yamuu.',
      expected: 'අපි        කන්න         යමූ.'
    }
  ]
};

class TranslatorPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSite() {
    await this.page.goto(CONFIG.url);
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(CONFIG.timeouts.pageLoad);
  }

  async getInputField() {
    return this.page.getByRole('textbox', { name: CONFIG.selectors.inputField });
  }

  async getOutputField() {
    return this.page
      .locator(CONFIG.selectors.outputContainer)
      .filter({ hasNot: this.page.locator('textarea') })
      .first();
  }

  async clearAndWait() {
    const input = await this.getInputField();
    await input.clear();
    await this.page.waitForTimeout(CONFIG.timeouts.afterClear);
  }

  async typeInput(text) {
    const input = await this.getInputField();
    await input.fill(text);
  }

  async waitForOutput() {
    await this.page.waitForFunction(
      () => {
        const elements = Array.from(
          document.querySelectorAll('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap')
        );
        const output = elements.find(el => {
          const isInputField = el.tagName === 'TEXTAREA' || el.getAttribute('role') === 'textbox';
          return !isInputField && el.textContent && el.textContent.trim().length > 0;
        });
        return output !== undefined;
      },
      { timeout: 10000 }
    );
    await this.page.waitForTimeout(CONFIG.timeouts.translation);
  }

  async getOutputText() {
    const output = await this.getOutputField();
    const text = await output.textContent();
    return text.trim();
  }

  async getOutputTextPreserveSpacing() {
    const output = await this.getOutputField();
    const text = await output.textContent();
    return text;
  }

  async performTranslation(inputText) {
    await this.clearAndWait();
    await this.typeInput(inputText);
    await this.waitForOutput();
    return await this.getOutputText();
  }

  async performTranslationPreserveSpacing(inputText) {
    await this.clearAndWait();
    await this.typeInput(inputText);
    await this.waitForOutput();
    return await this.getOutputTextPreserveSpacing();
  }
}

test.describe('SwiftTranslator - Singlish to Sinhala Conversion Tests', () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.navigateToSite();
  });

  test.describe('Positive Functional Tests', () => {
    for (const testCase of TEST_DATA.positive) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  test.describe('Negative Functional Tests', () => {
    for (const testCase of TEST_DATA.negative) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  test.describe('UI Functionality Tests', () => {
    test(`${TEST_DATA.ui[0].tcId} - ${TEST_DATA.ui[0].name}`, async () => {
      const actualOutput = await translator.performTranslationPreserveSpacing(TEST_DATA.ui[0].input);
      expect(actualOutput).toBe(TEST_DATA.ui[0].expected);
      await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
    });
  });
});