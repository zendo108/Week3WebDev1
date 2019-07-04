/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function draw_color_numbers(){
    var html = "<h3>Colored Numbers 1-10</h3>"
    
    for(var i=1; i<=10;i++){
        html +="<span style='font-size:2rem;color:RGB("+ Math.floor(Math.random() * 255) +","+ Math.floor(Math.random() * 255) +","+ Math.floor(Math.random() * 255) +")'>"+ i +"</span>";
        html += " ";
    }
    html += "<p>Click again to change colors at random</p>";
    document.getElementById("experiment-area").innerHTML = html;
}

function squared_numbers(){
    var html = "<h3>Squared Numbers 1-10</h3>"
    
    for(var i=1; i<=10;i++){
        html +="<span style='font-size:2rem;color:RGB("+ Math.floor(Math.random() * 255) +","+ Math.floor(Math.random() * 255) +","+ Math.floor(Math.random() * 255) +")'>"+ Math.pow(i,2) +"</span>";
        html += " ";
    }
    html += "<p>Click again and you get the same thing</p>";
    document.getElementById("experiment-area").innerHTML = html;
}

function two_lists(){
    var html = "<h3>Two Boring Lists</h3>";
    html += "<h3>Unordered List(ul)</h3>";
    html += "<ul>";
    for(var i=1; i<=10;i++){
        html +="<li><span style='font-size:1rem;color:RGB("+ Math.floor(Math.random() * 255) +","+ Math.floor(Math.random() * 255) +","+ Math.floor(Math.random() * 255) +")'>"+ Math.pow(i,2) +"</span></li>";
    }
    html += "</ul>";
    
    html += "<h3>Ordered List(ol)</h3>";
    html += "<ol>";
    for(var i=1; i<=10;i++){
        html +="<li><span style='font-size:1rem;color:RGB("+ Math.floor(Math.random() * 255) +","+ Math.floor(Math.random() * 255) +","+ Math.floor(Math.random() * 255) +")'>"+ Math.pow(i,2) +"</span></li>";
    }
    html += "</ol>";
//    document.getElementById("experiment-area").innerHTML = html;
    $("#experiment-area").html(html);
}

function letter_format(){
    var html = "<h3>Letter Format</h3>";
    html += "<p class='text-left'>";
    html += "<i>";
    html += "Dilbert H.<br>1234 Anim Street<br>P.O. Box 22222";
    html += "</i>";
    html += "</p>";
    
    html += "<p class='text-center'>";
    html += "<i>";
    html += "Someone A. Person<br>5555 Street Avenue<br>Metrpolitan, Metropolis 11111";
    html += "</i>";
    html += "</p>";
    $("#experiment-area").html(html);
}

function anchor(){
    var html = "<h3>Anchor</h3>";
    html += "<a class='btn btn-primary' href='#bottom-anchor' name='top-anchor'>go to bottom</a>";
    for(var i=1; i<=100;i++){
        html +="<p style='font-size:2rem;color:RGB("+ Math.floor(Math.random() * 255) +","+ Math.floor(Math.random() * 255) +","+ Math.floor(Math.random() * 255) +")'>"+ Math.pow(i,2) +"</p>";

    }
    html += "<a class='btn btn-primary' href='#top-anchor' name='bottom-anchor'>go to top</a>";
    $("#experiment-area").html(html);
}

function five_links(){
    var html = "<h3>5 Links</h3>";
    
        html +="<a class='btn btn-primary btn-sm btn-block' href='https://www.youtube.com/' target='_blank'>Youtube</a>";
        html +="<a class='btn btn-primary btn-sm btn-block' href='https://www.linkedin.com/' target='_blank'>linkedin</a>";
        html +="<a class='btn btn-primary btn-sm btn-block' href='https://www.facebook.com/' target='_blank'>facebook</a>";
        html +="<a class='btn btn-primary btn-sm btn-block' href='https://www.instagram.com/?hl=en' target='_blank'>instagram</a>";
        html +="<a class='btn btn-primary btn-sm btn-block' href='https://us.coca-cola.com/?gclsrc=aw.ds&gclsrc=aw.ds&gclid=CjwKCAjwx_boBRA9EiwA4kIELt5MqdfOmhPbUdNlrvTgapFljQcSySDSUNVaPKt25zaTyG060KtrDRoCsGUQAvD_BwE' target='_blank'>cocacola</a>";

    $("#experiment-area").html(html);
}

function five_images(){
    var html = '<h2>Cheeta</h2><a data-flickr-embed="true"  href="https://www.flickr.com/photos/cheishichiyo/8620325735/in/photolist-e8KqvM-cMZANo-gD33Sv-anBCLz-fnKx4j-cMYEdj-b4pZU8-o7U7YL-23MhF8C-98TyA3-4kidYr-F9grpv-ktZqiM-ZsMGDD-dbzGv1-pLoh5n-evRsbp-fmXs9R-AxQJSX-ixj9TD-rxXJ7N-dbx5bY-e7wHJY-q3NEVp-cMZRas-qvKF9a-jJjVwH-ceXYVo-mCEPiR-Ay6EEz-an7do8-cp2Trh-cUuY8U-peKh18-dbzMtM-9aonmC-fMnp95-qen16s-Z6Nn9j-akPHFV-fFWQTi-ePk38i-q3WK71-fJKzcB-4kngCJ-2eGxWbg-fFWMPc-yEtuqC-27un5jy-nzR4hp" title="animal"><img src="https://live.staticflickr.com/8519/8620325735_ef821e1c2a_k.jpg" width="50%" height="50%" alt="animal"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>';
    html +='<br><br>';
    html +='<h2>Deer</h2>';
    html +='<a data-flickr-embed="true"  href="https://www.flickr.com/photos/cheishichiyo/10264461753/in/photolist-cMZANo-gD33Sv-anBCLz-fnKx4j-cMYEdj-b4pZU8-o7U7YL-23MhF8C-98TyA3-4kidYr-F9grpv-ktZqiM-ZsMGDD-dbzGv1-pLoh5n-evRsbp-fmXs9R-AxQJSX-ixj9TD-rxXJ7N-dbx5bY-e7wHJY-q3NEVp-cMZRas-qvKF9a-jJjVwH-ceXYVo-mCEPiR-Ay6EEz-an7do8-cp2Trh-cUuY8U-peKh18-dbzMtM-9aonmC-fMnp95-qen16s-Z6Nn9j-akPHFV-fFWQTi-ePk38i-q3WK71-fJKzcB-4kngCJ-2eGxWbg-fFWMPc-yEtuqC-27un5jy-nzR4hp-4mcbAK/" title="animal"><img src="https://live.staticflickr.com/5504/10264461753_cadac73880_k.jpg" width="60%" height="60%" alt="animal"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>';
    html +='<br><br>';
    html +='<h2>Monkeys</h2>';
    html +='<a data-flickr-embed="true"  href="https://www.flickr.com/photos/cheishichiyo/6151809937/in/photolist-cMZANo-gD33Sv-anBCLz-fnKx4j-cMYEdj-b4pZU8-o7U7YL-23MhF8C-98TyA3-4kidYr-F9grpv-ktZqiM-ZsMGDD-dbzGv1-pLoh5n-evRsbp-fmXs9R-AxQJSX-ixj9TD-rxXJ7N-dbx5bY-e7wHJY-q3NEVp-cMZRas-qvKF9a-jJjVwH-ceXYVo-mCEPiR-Ay6EEz-an7do8-cp2Trh-cUuY8U-peKh18-dbzMtM-9aonmC-fMnp95-qen16s-Z6Nn9j-akPHFV-fFWQTi-ePk38i-q3WK71-fJKzcB-4kngCJ-2eGxWbg-fFWMPc-yEtuqC-27un5jy-nzR4hp-4mcbAK/" title="animal"><img src="https://live.staticflickr.com/6180/6151809937_1efbe29d47_z.jpg" width="502" height="640" alt="animal"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>';
    html +='<br><br>';
    html +='<h2>Kangoroo</h2>';
    html +='<a data-flickr-embed="true"  href="https://www.flickr.com/photos/x-oph/2187444273/in/photolist-cMZANo-gD33Sv-anBCLz-fnKx4j-cMYEdj-b4pZU8-o7U7YL-23MhF8C-98TyA3-4kidYr-F9grpv-ktZqiM-ZsMGDD-dbzGv1-pLoh5n-evRsbp-fmXs9R-AxQJSX-ixj9TD-rxXJ7N-dbx5bY-e7wHJY-q3NEVp-cMZRas-qvKF9a-jJjVwH-ceXYVo-mCEPiR-Ay6EEz-an7do8-cp2Trh-cUuY8U-peKh18-dbzMtM-9aonmC-fMnp95-qen16s-Z6Nn9j-akPHFV-fFWQTi-ePk38i-q3WK71-fJKzcB-4kngCJ-2eGxWbg-fFWMPc-yEtuqC-27un5jy-nzR4hp-4mcbAK/" title="Animals"><img src="https://live.staticflickr.com/2388/2187444273_0ae3bb7a8a_z.jpg" width="426" height="640" alt="Animals"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>';
    html +='<br><br>';
    html +='<h2>Horsie</h2>';
    html +='<a data-flickr-embed="true"  href="https://www.flickr.com/photos/zeeyolqpictures/25691458063/in/photolist-cMZANo-gD33Sv-anBCLz-fnKx4j-cMYEdj-b4pZU8-o7U7YL-23MhF8C-98TyA3-4kidYr-F9grpv-ktZqiM-ZsMGDD-dbzGv1-pLoh5n-evRsbp-fmXs9R-AxQJSX-ixj9TD-rxXJ7N-dbx5bY-e7wHJY-q3NEVp-cMZRas-qvKF9a-jJjVwH-ceXYVo-mCEPiR-Ay6EEz-an7do8-cp2Trh-cUuY8U-peKh18-dbzMtM-9aonmC-fMnp95-qen16s-Z6Nn9j-akPHFV-fFWQTi-ePk38i-q3WK71-fJKzcB-4kngCJ-2eGxWbg-fFWMPc-yEtuqC-27un5jy-nzR4hp-4mcbAK/" title="Animal"><img src="https://live.staticflickr.com/1549/25691458063_8442bff466_z.jpg" width="640" height="427" alt="Animal"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>';
    $("#experiment-area").html(html);
}