d3.tsv("features.tsv", function(d){
                document.write('<h1> <a href="index.html"> NH농협생명 대학원(생) 아이디어 공모전 출품작 </a></h1>')
    
                document.write("<ul>");
                document.write('<li> <a href="mostype.html"> 타겟 변수(MOSTYPE) 설명</a></li>');
                document.write('<li> <a href="features.html"> 특징(feature) 설명</a></li>');
                document.write('<li> <a href="result.html">특징 추출 결과(변수 중요도)</a></li>');
                document.write('<li> <a href="heat.html">시각화(visualization)</a></li>');
                document.write("<ul>");
    
                document.write("<h2> 2. 입력 변수 설명 </h2>");
                document.write("<p> 타겟 변수를 예측하는데 활용된 84개의 변수</p>");
                document.write("<table>");
                document.write("<tr>");
                document.write("<th>연번</th>");
                document.write("<th>약자</th>");
                document.write("<th>설명</th>");
                document.write("</tr>");
                for(var i=0; i<d.length; i++){
                    document.write("<tr>");
                    document.write("<th>" + i + "</th>");
                    document.write("<th>" +  d[i].abbs + "</th>");
                    document.write("<th>" +  d[i].feature + "</th>")
                    document.write("</tr>");
                }
            });