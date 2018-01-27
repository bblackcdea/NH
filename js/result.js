d3.csv("final_result.csv", function(d){
                document.write('<h1> <a href="index.html"> NH농협생명 대학원(생) 아이디어 공모전 출품작 </a></h1>')
    
                document.write("<ul>");
                document.write('<li> <a href="mostype.html"> 타겟 변수(MOSTYPE) 설명</a></li>');
                document.write('<li> <a href="features.html"> 특징(feature) 설명</a></li>');
                document.write('<li> <a href="result.html">특징 추출 결과(변수 중요도)</a></li>');
                document.write('<li> <a href="heat.html">시각화(visualization)</a></li>');
                document.write("<ul>");
    
                document.write("<h2> 3. 특징 추출 결과 </h2>");
                document.write("<p> 분산 한계점, 카이제곱 통계적 유의성, 모델 변수 중요도 방식으로의 특징 추출 결과</p>");
                document.write("<table>");
                document.write("<tr>");
                document.write("<th>특징</th>");
                document.write("<th>특징 설명</th>");
                document.write("<th>특징 분산</th>");
                document.write("<th>카이제곱 통계적 유의성</th>");
                document.write("<th>모델 변수 중요도</th>");
                document.write("<th>세 요소의 평균</th>");
                document.write("</tr>");
                for(var i=0; i<d.length; i++){
                    document.write("<tr>");
                    document.write("<th>" +  d[i].labels + "</th>");
                    document.write("<th>" +  d[i].features + "</th>");
                    document.write("<th>" +  d[i].variance + "</th>");
                    document.write("<th>" +  d[i].chi + "</th>");
                    document.write("<th>" +  d[i].feature_importance + "</th>");
                    document.write("<th>" +  d[i].ensemble + "</th>");
                    document.write("</tr>");
                }
            });