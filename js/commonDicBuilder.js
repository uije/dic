var commonDicBuilder = commonDicBuilder || {};

commonDicBuilder.menu = {};
commonDicBuilder.menu.data = [
    {name:"D.I.C 투명교정", link:"./about_dic.html"},
    //{name:"D.I.C 제품소개", link:"./product.html"},
    //{name:"주문공간", link:"./order.html"},
    {name:"고객센터", link:"./customer.html"},
    {name:"회사소개", link:"./introduce.html"}
];

commonDicBuilder.menu.build = function(){
    var menuHTML = '<li><a href="%link%">%name%</a></li>';
    var appendHTML = '';

    for(i in this.data){
        appendHTML += menuHTML.replace('%link%', this.data[i].link).replace('%name%', this.data[i].name);
    }

    $('#menu').append(appendHTML);
}

commonDicBuilder.footer = {};
commonDicBuilder.footer.build = function(){
    var footerHTML = '<p> ㈜ 디아이씨</p>' + 
        '<address>   대표이사 : 박재형 <br />   사업자등록번호 : 171-97-00016 경기도 고양시 일산동구 고봉로 32-19 남정씨티프라자 705호' +
        '<br />TEL : 031 915 6600' +
        '<br />FAX : 031 915 9600' +
        '<br />E-mail : dic00016@naver.com' + 
        '<br />COPYRIGHT 2016 ALL RIGHTS RESERVED' +
        '</address>';

    $('#footerin').append(footerHTML);
}
