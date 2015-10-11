Meteor.publish("userStatus", function() {
  return Meteor.users.find({ "status.online": true }, { fields: { 'profile':1, 'status':1 } });
});
Meteor.publish('words', function () {
	return Words.find();
});
Meteor.publish('games', function () {
	return Games.find();
});
Meteor.publish('results', function () {
    return Results.find();
});
Meteor.publish('notification', function () {
	return Notification.find();
});

// Users.allow({
// 	insert: function (doc) {
// 		return true;
// 	},
// 	update: function (doc) {
// 		return true;
// 	}
// });

Words.allow({
	insert: function (doc) {
		return true;
	},
	update: function (doc) {
		return true;
	}
});
Games.allow({
	insert: function (doc) {
		return true;
	},
	update: function (doc) {
		return true;
	}
});
Results.allow({
    insert: function (doc) {
        return true;
    },
    update: function (doc) {
        return true;
    }
});
Notification.allow({
	insert: function (doc) {
		return true;
	},
	update: function (doc) {
		return true;
	}
});

Meteor.startup(function () {
	if (!Words.findOne({ english: 'abdomen'})) {
        Words.insert({ english: 'abdomen', korean: '복부|배|' });
        Words.insert({ english: 'adapt', korean: '…을 적응시키다|순응하다|개작하다|' });
        Words.insert({ english: 'addition', korean: '추가|덧셈|증축|등재|' });
        Words.insert({ english: 'address', korean: '주소|연설하다|이야기하다|부르다|' });
        Words.insert({ english: 'adhere', korean: '고수하다|들러붙다|달라붙다|' });
        Words.insert({ english: 'adjourn', korean: '휴회하다|회의를 연기하다|' });
        Words.insert({ english: 'adjust', korean: '조정되다|적응하다|감안하다|조절하다|맞추다|' });
        Words.insert({ english: 'admission', korean: '입학|입장|인정|입원|입국|' });
        Words.insert({ english: 'advantage', korean: '이점|유리|이익|우위|혜택|' });
        Words.insert({ english: 'advantageous', korean: '유리한|…하기 좋은|이로운|' });
        Words.insert({ english: 'advent', korean: '출현|도래|그리스도의 강림|' });
        Words.insert({ english: 'adversity', korean: '역경|재난|불운|' });
        Words.insert({ english: 'advertiser', korean: '광고자|광고인|광고주|' });
        Words.insert({ english: 'advisable', korean: '타당한|현명한|권할 만한|' });
        Words.insert({ english: 'advise', korean: '조언하다|권하다|알리다|…하는 게 좋다|상담하다|' });
        Words.insert({ english: 'affect', korean: '영향을 주다|작용하다|감염시키다|…체하다|' });
        Words.insert({ english: 'after school', korean: '방과 후의|방과 후|' });
        Words.insert({ english: 'afternoon', korean: '오후|점심|' });
        Words.insert({ english: 'again', korean: '다시|또|다시 한 번|' });
        Words.insert({ english: 'age', korean: '나이|시대|오래되다|노인들|오랫동안|' });
        Words.insert({ english: 'ageless', korean: '영원한|언제나 젊은|불로의|' });
        Words.insert({ english: 'agenda', korean: '의사 일정|의제|비망록|' });
        Words.insert({ english: 'agreeable', korean: '동의할 만한|마음에 드는|쾌적한|상냥한|' });
        Words.insert({ english: 'agreement', korean: '합의|협정|계약|동의|조화|' });
        Words.insert({ english: 'agriculture', korean: '농업|축산|' });
        Words.insert({ english: 'aide', korean: '측근|보좌관|참모|조력자|부관|' });
        Words.insert({ english: 'aim', korean: '목표|목적|겨냥하다|노리다|조준하다|' });
        Words.insert({ english: 'alert', korean: '경계|주의하다|집중하다|알림|기민한|' });
        Words.insert({ english: 'appetizer', korean: '식욕을 돋우는 것|전채|식욕 촉진제|' });
        Words.insert({ english: 'apply', korean: '적용하다|지원하다|신청하다|바르다|해당되다|' });
        Words.insert({ english: 'appoint', korean: '임명하다|지명하다|지정하다|' });
        Words.insert({ english: 'appreciate', korean: '감사하다|인정하다|감상하다|평가|이해하다|' });
        Words.insert({ english: 'approach', korean: '접근법|접근하다|방법|다가오다|육박하다|' });
        Words.insert({ english: 'archipelago', korean: '다도해|군도|에게 해|' });
        Words.insert({ english: 'argument', korean: '주장|논쟁|말다툼|논점|논거|' });
        Words.insert({ english: 'around', korean: '주변에|주위에|돌아다니는|근처에|' });
        Words.insert({ english: 'arrive', korean: '도착하다|오다|일어나다|성공하다|' });
        Words.insert({ english: 'artist', korean: '예술가|화가|아티스트|가수|미술가|' });
        Words.insert({ english: 'as usual', korean: '언제나 처럼|여느 때처럼|' });
        Words.insert({ english: 'ask', korean: '묻다|요청하다|질문하다|부탁하다|말씀하다|' });
        Words.insert({ english: 'aspirin', korean: '아스피린|그 정제|진통제|' });
        Words.insert({ english: 'attendee', korean: '참석자|출석자|' });
        Words.insert({ english: 'attention', korean: '관심|주의력|주목|주의|집중|' });
        Words.insert({ english: 'attentive', korean: '주의 깊은|세심한|친절한|' });
        Words.insert({ english: 'attorney', korean: '변호사| 지방 검사|법무장관|법정대리인| 위임장|' });
        Words.insert({ english: 'attractive', korean: '매력적인|매혹적인|' });
        Words.insert({ english: 'boat', korean: '배|보트|' });
        Words.insert({ english: 'bone', korean: '뼈|골격|유골|' });
        Words.insert({ english: 'cafeteria', korean: '구내 식당|카페테리아|' });
        Words.insert({ english: 'cash', korean: '현금|돈|현찰|현금화하다|' });
        Words.insert({ english: 'casual', korean: '캐주얼의|편한|평상복의|평상시의|우연한|' });
        Words.insert({ english: 'century', korean: '세기|100년|' });
        Words.insert({ english: 'cereal', korean: '시리얼|곡물|' });
        Words.insert({ english: 'certainly', korean: '분명히|물론이지|확실히|정말로|반드시|' });
        Words.insert({ english: 'chairperson', korean: '사회자|회장|의장|' });
        Words.insert({ english: 'challenge', korean: '도전|문제|난제|이의를 제기하다|자극하다|' });
        Words.insert({ english: 'cheat', korean: '속이다|부정 행위|바람 피우다|커닝|사기꾼|' });
        Words.insert({ english: 'check', korean: '확인하다|수표|점검하다|견제|검사|' });
        Words.insert({ english: 'Chinese', korean: '중국인|중국의|중국어|중국 사람|' });
        Words.insert({ english: 'choice', korean: '선택|결정|선정|종류|' });
        Words.insert({ english: 'cigarette', korean: '담배|궐련|' });
        Words.insert({ english: 'circle', korean: '원|서클|돌다|사회|그룹|' });
        Words.insert({ english: 'closely', korean: '긴밀히|면밀하게|유심히|가까이|깊은|' });
        Words.insert({ english: 'clothes', korean: '옷|세탁물|의복|의상|옷가지|' });
        Words.insert({ english: 'club', korean: '클럽|팀|동아리|구단|골프채|' });
        Words.insert({ english: 'coast', korean: '해안|연안|해변|' });
        Words.insert({ english: 'college', korean: '대학|연구소|칼리지|' });
        Words.insert({ english: 'color', korean: '색|색깔|색상|컬러|색채|' });
        Words.insert({ english: 'consequence', korean: '결과|중요성|결말|' });
        Words.insert({ english: 'consider', korean: '고려하다|여기다|생각한다|간주하다|검토하다|' });
        Words.insert({ english: 'considerable', korean: '상당한|꽤|' });
        Words.insert({ english: 'consist of', korean: '…으로 구성되다. |' });
        Words.insert({ english: 'economic', korean: '경제의|경기의|' });
        Words.insert({ english: 'economy', korean: '경제|경기|이코노미|' });
        Words.insert({ english: 'elevator', korean: '엘리베이터|' });
        Words.insert({ english: 'else', korean: '다른|더|그 밖에|아니면|' });
        Words.insert({ english: 'envy', korean: '부러워하다|질투하다|선망|' });
        Words.insert({ english: 'errand', korean: '심부름|볼일|' });
        Words.insert({ english: 'error', korean: '실수|오류|잘못|오차|에러|' });
        Words.insert({ english: 'eternal', korean: '영원한|불멸의|무한한|불변의|천추의|' });
        Words.insert({ english: 'even', korean: '평평해지다|균등해지다|백중해지다|같은|' });
        Words.insert({ english: 'ever', korean: '지금까지|이전에|항상|결코|언제까지나|' });
        Words.insert({ english: 'everlasting', korean: '영원한|끊임없는|끝없는|' });
        Words.insert({ english: 'everything', korean: '모든|모든 것|모두|만사|최선|' });
        Words.insert({ english: 'evil', korean: '사악한|악|악마|나쁜|해악|' });
        Words.insert({ english: 'exactly', korean: '정확히|바로|그렇소|확실히|꼭|' });
        Words.insert({ english: 'fare', korean: '운임|요금|실적을 내다|상연물|' });
        Words.insert({ english: 'fashionable', korean: '멋있는|패션 감각이 있는|유행의|' });
        Words.insert({ english: 'fast food', korean: '패스트푸드|즉석 식품|즉석 요리의|' });
        Words.insert({ english: 'fat', korean: '지방|뚱뚱한|살찐|비만한|기름|' });
        Words.insert({ english: 'fat­-free milk', korean: '무지방 우유|' });
        Words.insert({ english: 'firefly', korean: '반딧불이|개똥벌레|반딧불|' });
        Words.insert({ english: 'firmly', korean: '확고하게|강하게|꽉|자신 있게|' });
        Words.insert({ english: 'flow', korean: '흐르다|흐름|유입|유동|유출|' });
        Words.insert({ english: 'flowerpot', korean: '화분|' });
        Words.insert({ english: 'follow', korean: '따르다|뒤를 잇다|따라가다|지켜보다|지키다|' });
        Words.insert({ english: 'food', korean: '음식|식품|식량|먹이|푸드|' });
        Words.insert({ english: 'football', korean: '축구|미식 축구|풋볼|' });
        Words.insert({ english: 'footwork', korean: '풋워크|발놀림|교묘한 처리|' });
        Words.insert({ english: 'for', korean: '…을 위하여|…을 기념하여|…용의|' });
        Words.insert({ english: 'for a minute', korean: '잠시, 잠깐|' });
        Words.insert({ english: 'for a moment', korean: '잠깐 동안|당장 그때만|잠시 동안|' });
        Words.insert({ english: 'for a while', korean: '잠깐, 잠시 동안 |' });
        Words.insert({ english: 'for example', korean: '예를 들면|가령|예컨대|한 예|' });
        Words.insert({ english: 'forbid', korean: '금지하다|어렵게하다|용납하지 않다|' });
        Words.insert({ english: 'forecast', korean: '전망하다|예상|예보|내다보다|' });
        Words.insert({ english: 'formula', korean: '공식|포뮬러 1|방식|유동식|처방|' });
        Words.insert({ english: 'forth', korean: '앞으로|밖으로|이후|' });
        Words.insert({ english: 'forum', korean: '공개 토론|토론회|좌담회|' });
        Words.insert({ english: 'fry', korean: '튀기다|감자튀김|프라이|튀김|망가지다|' });
        Words.insert({ english: 'fun', korean: '재미있는|즐거운|놀리다|신나는|장난|' });
        Words.insert({ english: 'funding', korean: '재원|재정적 지출|자금 제공|' });
        Words.insert({ english: 'girlfriend', korean: '여자 친구|애인|연인|' });
        Words.insert({ english: 'glad', korean: '기쁜|좋은|다행인|고마운|반가운|' });
        Words.insert({ english: 'glove', korean: '장갑|글러브|' });
        Words.insert({ english: 'go well', korean: '잘 가, 안녕히 가세요. [작별의 말]|' });
        Words.insert({ english: 'golden', korean: '황금의|골든|가장 좋은|절호의|' });
        Words.insert({ english: 'golf', korean: '골프|' });
        Words.insert({ english: 'good', korean: '좋은|잘|훌륭한|즐거운|착한|' });
        Words.insert({ english: 'heavy', korean: '무거운|강력한|중(重)…|과중한|심한|' });
        Words.insert({ english: 'helmet', korean: '헬멧|안전모|마스크|투구|머리 모양|' });
        Words.insert({ english: 'help', korean: '도움|돕다|도와주다|기여하다|' });
        Words.insert({ english: 'her', korean: '그녀의|그녀를|그녀가|여자|그녀에게|' });
        Words.insert({ english: 'here', korean: '여기|이곳|이쪽|저기|' });
        Words.insert({ english: 'hidden', korean: '숨은|감춰진|비밀의|남모르게|' });
        Words.insert({ english: 'hire', korean: '고용하다|채용하다|뽑다|사람을 쓰다|빌리다|' });
        Words.insert({ english: 'his', korean: '그의|그 사람의|그의 것|신의|' });
        Words.insert({ english: 'hit', korean: '치다|히트를 치다|타격|달하다|명중하다|' });
        Words.insert({ english: 'hobby', korean: '취미|' });
        Words.insert({ english: 'hold', korean: '열다|보유하다|잡다|기다리다|' });
        Words.insert({ english: 'hold out', korean: '견디다|지탱되다|유지되다|' });
        Words.insert({ english: 'homeroom', korean: '홈룸|홈룸 시간|' });
        Words.insert({ english: 'important', korean: '중요한|주요한|중대한|소중한|' });
        Words.insert({ english: 'impress', korean: '인상|감동시키다|감명을 주다|' });
        Words.insert({ english: 'impression', korean: '인상|생각|흉내|' });
        Words.insert({ english: 'in a hurry', korean: '서둘러|황급히|조급히|' });
        Words.insert({ english: 'interesting', korean: '흥미로운|재미있는|놀라운|' });
        Words.insert({ english: 'international', korean: '국제적인|인터내셔널|국제의|국제간의|' });
        Words.insert({ english: 'international marriage', korean: '국제 결혼|' });
        Words.insert({ english: 'interview', korean: '인터뷰|면접|면담|회견|' });
        Words.insert({ english: 'invade', korean: '침략하다|침입하다|침해하다|' });
        Words.insert({ english: 'investigate', korean: '조사하다|수사하다|살피다|' });
        Words.insert({ english: 'invitation', korean: '초대|초청|' });
        Words.insert({ english: 'irregular', korean: '비정규의|불규칙의|비정상적인|불안정|' });
        Words.insert({ english: 'juvenile', korean: '청소년의|아이다운|유치한|' });
        Words.insert({ english: 'knowledge', korean: '지식|아는 것|학식|인지|' });
        Words.insert({ english: 'lack', korean: '부족|…이 없다|결핍|부재|모자라다|' });
        Words.insert({ english: 'recently', korean: '최근에|요즘에|얼마전|근래에|요즈음|' });
        Words.insert({ english: 'recognize', korean: '인정하다|인식하다|알아보다|알다|깨닫다|' });
        Words.insert({ english: 'recommend', korean: '추천하다|권하다|권고하다|제시하다|소개하다|' });
        Words.insert({ english: 'recruit', korean: '채용하다|모집하다|선발하다|신병|신입사원|' });
        Words.insert({ english: 'redeem', korean: '되찾다|상환하다|회복하다|' });
        Words.insert({ english: 'reef', korean: '산호초|암초|' });
        Words.insert({ english: 'refrain', korean: '자제하다|삼가다|후렴|' });
        Words.insert({ english: 'refresh', korean: '상쾌하게 하다| 되살리다|재충전하다|새롭게 하다|' });
        Words.insert({ english: 'refrigerator', korean: '냉장고|' });
        Words.insert({ english: 'retail', korean: '소매|유통|판매|매장|마트|' });
        Words.insert({ english: 'retire', korean: '은퇴하다|퇴직하다|퇴역시키다|퇴임하다|물러나다|' });
        Words.insert({ english: 'return', korean: '돌아오다|복귀하다|돌려주다|돌아가다|귀국|' });
        Words.insert({ english: 'rewarding', korean: '가치가 있는|보람이 있는|보람있는|' });
        Words.insert({ english: 'rice', korean: '쌀|밥|벼|' });
        Words.insert({ english: 'right', korean: '권리|인권|옳은|맞는|바로|' });
        Words.insert({ english: 'right now', korean: '지금|당장|현재|이제|요즘|' });
        Words.insert({ english: 'ring', korean: '반지|울리다|전화하다|링|고리|' });
        Words.insert({ english: 'riverside', korean: '강변|강기슭|리버사이드|' });
        Words.insert({ english: 'similar', korean: '비슷한|유사한|같은|흡사한|닮은|' });
        Words.insert({ english: 'simply', korean: '단순히|그저|간단히|아주|전혀|' });
        Words.insert({ english: 'since', korean: '…이후|…때부터|…이래|그 후|' });
        Words.insert({ english: 'single', korean: '하나의|싱글|단일의|독신의|유일한|' });
        Words.insert({ english: 'singly', korean: '단독으로|하나씩|홀로|' });
        Words.insert({ english: 'sister', korean: '여동생|자매|언니|누나|수녀|' });
        Words.insert({ english: 'site', korean: '사이트|현장|유적지|장소|부지|' });
        Words.insert({ english: 'situation', korean: '상황|사태|상태|입장|경우|' });
        Words.insert({ english: 'skill', korean: '기술|실력|솜씨|기능|' });
        Words.insert({ english: 'solution', korean: '해결책|방안|해법|솔루션|용액|' });
        Words.insert({ english: 'solve', korean: '해결하다|풀다|' });
        Words.insert({ english: 'some', korean: '일부|몇|어떤|…중에는|약간|' });
        Words.insert({ english: 'someday', korean: '언젠가|머지않아|훗날|' });
        Words.insert({ english: 'someone', korean: '누군가|어떤 사람|' });
        Words.insert({ english: 'something', korean: '무언가|어떤 것|어떤 일|중요한 것|조금|' });
        Words.insert({ english: 'son', korean: '아들|자식|자손|양자|' });
        Words.insert({ english: 'soon', korean: '곧|빨리|조만간|…대로|바로|' });
        Words.insert({ english: 'spade', korean: '스페이드|삽|' });
        Words.insert({ english: 'special', korean: '특별한|특수한|스페셜|임시의|특이한|' });
        Words.insert({ english: 'spell', korean: '철자하다|마법|의미하다|기간|초래하다|' });
        Words.insert({ english: 'spider', korean: '거미|' });
        Words.insert({ english: 'spinach', korean: '시금치|그 잎|돈|' });
        Words.insert({ english: 'spirit', korean: '정신|사람|유령|영혼|마음|' });
        Words.insert({ english: 'spot', korean: '장소|위|발견하다|점|관광지|' });
        Words.insert({ english: 'spring break', korean: '봄방학|' });
        Words.insert({ english: 'stamp', korean: '우표|도장|찍다|인지|짓밟다|' });
        Words.insert({ english: 'stand for', korean: '…을 나타내다|상징하다|대표하다|' });
        Words.insert({ english: 'start', korean: '시작하다|출발점|출발하다|처음|선발|' });
        Words.insert({ english: 'suitable', korean: '적합한|적당한|알맞은|적절한|' });
        Words.insert({ english: 'summary', korean: '요약|개괄|약식|성명|' });
        Words.insert({ english: 'sun', korean: '태양|해|햇볕|' });
        Words.insert({ english: 'supper', korean: '저녁 식사|만찬|야식|' });
        Words.insert({ english: 'sure', korean: '확신하고|확실히|분명히|물론|꼭|' });
        Words.insert({ english: 'sweep', korean: '휩쓸다|청소하다|압승하다|조사하다|' });
        Words.insert({ english: 'temporary', korean: '임시의|일시적인|임시 고용|' });
        Words.insert({ english: 'tempt', korean: '하고 싶은|유혹하다|끌다|꾀다|' });
        Words.insert({ english: 'tension', korean: '긴장|갈등|불안|팽팽함|' });
        Words.insert({ english: 'than', korean: '보다|다름아닌|보다는|…이외의|' });
        Words.insert({ english: 'thanks for', korean: '~에 대해 감사하다. 고마워하다.|' });
        Words.insert({ english: 'that', korean: '저것|것|그|다른|' });
        Words.insert({ english: 'thing', korean: '것|일|상황|물건|짓|' });
        Words.insert({ english: 'think', korean: '생각하다|같다|평가하다|상상하다|예상하다|' });
        Words.insert({ english: 'think the same way', korean: '같은 생각이다|' });
        Words.insert({ english: 'trick', korean: '속이다|묘기|재주|장난|요령|' });
        Words.insert({ english: 'tried', korean: '노력한|…하려고 한|먹어 본|입어 본|' });
        Words.insert({ english: 'trust', korean: '신뢰|믿음|기업합동|신탁|맡기다|' });
        Words.insert({ english: 'unjust', korean: '부당한|' });
        Words.insert({ english: 'unknown', korean: '알려지지 않은|알 수 없는|미지의|미상의|무명의|' });
        Words.insert({ english: 'unlawful', korean: '법에 어긋나는|적출이 아닌|불법적인|' });
        Words.insert({ english: 'unlock', korean: '열다|잠기지 않은|밝히다|' });
        Words.insert({ english: 'unnatural', korean: '부자연스러운|비정상적인|극도로 잔혹한|' });
        Words.insert({ english: 'unplug', korean: '마개를 뽑다|…에서 전원을 끊다|장애물을 제거하다|' });
        Words.insert({ english: 'unsatisfactory', korean: '불만족스러운|불충분한|' });
        Words.insert({ english: 'unselfish', korean: '이타적인|무사한|이기적이 아닌|' });
        Words.insert({ english: 'until', korean: '…할 때까지|…까지|…이 되어 비로소|' });
        Words.insert({ english: 'upset', korean: '화난|기분 나쁜|당황|혼란|아픈|' });
        Words.insert({ english: 'usage', korean: '사용|용법|소비|용도|' });
        Words.insert({ english: 'useful', korean: '유용한|쓸모 있는|도움이 되는|유익한|실용적인|' });
        Words.insert({ english: 'usually', korean: '보통|대개|일반적으로|늘|평소|' });
        Words.insert({ english: 'vacancy', korean: '빈자리|빈방|결원|' });
        Words.insert({ english: 'vocalist', korean: 'a person who sings|' });
        Words.insert({ english: 'volleyball', korean: '배구|' });
        Words.insert({ english: 'what', korean: '무엇|어떻게|뭐라고|무슨|어떤|' });
        Words.insert({ english: 'where', korean: '어디|곳|장소|' });
        Words.insert({ english: 'which', korean: '어떤|어느|' });
        Words.insert({ english: 'who', korean: '누구|' });
        Words.insert({ english: 'wish', korean: '바라다|…좋겠어|…싶다|소원|기원하다|' });
        Words.insert({ english: 'your', korean: '당신의|너의|여러분의|자네의|' });
	}
});


if (ServiceConfiguration.configurations.find({service: 'facebook'}).count()===0) {
  ServiceConfiguration.configurations.insert({
    service: "facebook",
    appId: "1478726142433307",
    secret: "583f4a87cf5d225987d05ba08e857eaa"
  });
}


Accounts.onCreateUser(function(options,user) {
  
  if(user.services.facebook == undefined)return user;
  
  check(options, Object);
  check(user, Object);

  options.profile.email = user.services.facebook.email;
  options.profile.userName = user.services.facebook.id;
  options.profile.facebookId = user.services.facebook.id;

  user.profile = options.profile;

  return user;
});
