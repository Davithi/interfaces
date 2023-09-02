// TypeScript-ում ինտերֆեյսը օբյեկտների, դասերի, ֆունկցիաների և նույնիսկ պարզունակ տեսակների համար պայմանագիր
// (կամ կառուցվածք) սահմանելու միջոց է: Սա թույլ է տալիս ակնկալիքներ դնել այն տվյալների ձևի և կառուցվածքի վերաբերյալ,
// որոնցով կաշխատեն ծրագրի տարբեր մասեր:

interface Rect {
  readonly id: string;
  // TypeScript-ում միայն կարդալու փոփոխիչն օգտագործվում է նշելու, որ հատկությունը չպետք է փոխվի այն սկզբնավորվելուց հետո: Սա ապահովում է անփոփոխություն այս գույքի համար:
  size: {
    width: number;
    height: number;
  };
  color?: string; // TypeScript-ում ինտերֆեյսի մեջ սեփականության անունից հետո հարցական նշանը (?) ցույց է տալիս, որ հատկությունը պարտադիր չէ: Սա նշանակում է, որ տվյալ ինտերֆեյսին համապատասխանող օբյեկտը կարող է ունենալ կամ չունենալ այս հատկությունը:
}

const rect1: Rect = {
  id: "2343423",
  size: {
    width: 20,
    height: 20,
  },
};
rect1.color = "yellow";
// Կազմման սխալ id  readonly
// rect1.id = '3434'; //Error

const rect2: Rect = {
  id: "255242",
  size: {
    width: 30,
    height: 30,
  },
  color: "#ccc",
};

const someValue: any = "this is a string";
const strLength: number = (someValue as string).length;
// TypeScript-ում as օպերատորն օգտագործվում է հստակ տիպի ձուլման համար: Սա թույլ է տալիս կոմպիլյատորին ասել, որ դուք գիտեք փոփոխականի ճշգրիտ տեսակը և ցանկանում եք այն փոխանցել այլ տեսակի՝ առանց կոմպիլյացիայի սխալ առաջացնելու:
const rect4 = {} as Rect;
const rect5 = <Rect>{};

// // ======================================

interface RectWithArea extends Rect {
  getArea: () => number;
}

const rect6: RectWithArea = {
  id: "wewe",
  size: {
    width: 80,
    height: 80,
  },
  color: "green",
  getArea(): number {
    return this.size.width * this.size.height;
  },
};

console.log(rect6.getArea());

// =========================

// Implements - հիմնաբառը TypeScript-ում օգտագործվում է ստուգելու համար, թե արդյոք դասը համապատասխանում է որոշակի ինտերֆեյսի:
// Սա ապահովում է, որ դասը պարունակում է հատուկ հատկություններ և մեթոդներ, որոնք նկարագրված են միջերեսում:
// Եթե ​​դասը չի իրականացնում ինտերֆեյսի մեջ նշված բոլոր հատկություններն ու մեթոդները, TypeScript-ը կոմպիլյացիայի սխալ կառաջացնի:

interface IClock {
  time: Date;
  setTime(date: Date): void;
}

class Clock implements IClock {
  time: Date = new Date();
  setTime(date: Date): void {
    this.time = date;
  }
}

// ==========================

// Սա TypeScript-ում Styles ինտերֆեյսի սահմանումն է, որն օգտագործում է ինդեքսի ստորագրությունը: Ինդեքսային ստորագրություն [բանալի՝ տող]՝ տող; նշանակում է, որ այս ինտերֆեյսը կարող է ունենալ ցանկացած թվով հատկություններ, որոնց անունները տողեր են (բանալի: string) և որոնց արժեքները նույնպես պետք է լինեն տողեր (:string):
// Այս տեսակի ինտերֆեյսը հաճախ օգտագործվում է նկարագրելու օբյեկտները, որոնք գործում են որպես «գծային քարտեզներ», ինչպես օրինակ՝ CSS ոճերը պահելու համար:

interface Styles {
  [key: string]: string;
}

const css:Styles = {
  border:"1px solid black",
  marginTop:'2px',
  borderRadius:'5px',
  a:'w'
}