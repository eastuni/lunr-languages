module.exports = {
    fields: [
        {
            name: 'title',
            config: { boost: 10 }
        }, {
            name: 'body'
        }
    ],
    documents: [
        {
            "title": "뉴스1",
            "body": "많은 분이 이런 이야기를 하신다. '일을 즐기면서 하라.' 어느 유명 강연자도 한국 운동선수들이 왜 창조적인 플레이와 롱런을 못하느냐에 관한 이유에 대해 즐기지 못하기 때문이라고 강조하기도 했다. 한국 선수들은 이기려고 하는데 유럽은 즐기면서 하기 때문이라고 말이다. 그런데 국가대표로 오랫동안 활약하면서 한국 농구 역사에 큰 업적을 남긴 대선수 중 한 사람인 서장훈 씨는 '노력하는 자가 즐기면서 하는 자를 못 따라간다'는 말은 완전히 거짓말이라고 단언한다. 그는 성인이 된 후 농구를 즐기면서 한 적이 거의 없다고 했다. 끊임없이 고통스러운 훈련을 견뎌낸 것뿐이라는 말에 많은 사람들의 공감을 받기도 했다. 도대체 누구 말이 맞는 걸까. 심리학자인 필자에게도 참으로 많이 주어진 질문이다.",
            "id": 1
        }, {
            "title": "뉴스2",
            "body": "그런데 잘 생각해 보면 둘 다 맞는 말이다. 과정은 분명 고통스럽지만 일이든 훈련이든 공부든 그 성취의 순간에 즐거움을 느낄 수 있는 사람들이 더 성장하기 때문이다. 필자 역시 대부분의 시간 동안 공부는 즐겁지 않았다. 주위에도 대부분의 시간을 즐기면서 하는 사람들은 거의 없다. 하지만 나이가 들면서 그 열매가 달다는 것을 알게 됐다. 최선을 다하되 그 과정의 고통과 결과를 겸허하게 받아들이는 것 역시 조금씩 능해지고 있다.",
            "id": 2
        }
    ],
    tests: [
        {
            what: "find the word %w",
            search: "과정*",
            found: 1
        }, {
            what: "find the word %w",
            search: "유명",
            found: 1
        }, {
            what: "never find a word that does not exist, like %w",
            search: "수학",
            found: 0
        }, {
            what: "never find a word that does not exist, like %w",
            search: "그런데",
            found: 0
        }, {
            what: "never find a word that does not exist, like %w",
            search: "많은",
            found: 0
        }, {
            what: "never find a word that does not exist, like %w",
            search: "잘",
            found: 0
        }, {
            what: "find a correctly stemmed word %w",
            search: "이야기*",
            found: 1
        }, {
            what: "find a correctly stemmed word %w",
            search: "한국",
            found: 1
        }, {
            what: "find a correctly stemmed word %w",
            search: "공부*",
            found: 1
        }

    ]
}