d3.tsv("labels.tsv", function(d){
    document.write('<h1> <a href="index.html"> NH농협생명 대학원(생) 아이디어 공모전 출품작 </a></h1>')
    
    document.write("<ul>");
    document.write('<li> <a href="mostype.html"> 타겟 변수(MOSTYPE) 설명</a></li>');
    document.write('<li> <a href="features.html"> 특징(feature) 설명</a></li>');
    document.write('<li> <a href="result.html">특징 추출 결과(변수 중요도)</a></li>');
    document.write('<li> <a href="heat.html">시각화(visualization)</a></li>');
    document.write("<ul>");
    document.write("<h2> 1. 타겟 변수 설명 (MOSTYPE)</h2>");
    document.write("<p> 각 고객이 속하는 고객 군 정보로, 나머지 변수를 통해 예측하고자 하는 변수</p>");
    document.write("<table>");
    document.write("<tr>");
    document.write("<th>라벨(고객 군)</th>");
    document.write("<th>설명(한글)</th>");
    document.write("<th>설명(영어)</th>");
    document.write("</tr>");
    for(var i=0; i<d.length; i++){
        document.write("<tr>");
        document.write("<th>" + d[i].label + "</th>");
        document.write("<th>" +  d[i].class_kr + "</th>");
        document.write("<th>" +  d[i].class + "</th>")
        document.write("</tr>");
    }
});