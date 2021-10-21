let hornes=[];
function Horn(title, image_url, description, keyword, horns){
   this.title = title;
   this.image_url = image_url;
   this.description = description;
   this.keyword = keyword;
   this.hornes = hornes;
   hornes.push(this);

}

Horn.prototype.render= function(){
    var section = $('<section></section>').addClass(`${this.keyword}`);
    var title = `<h2>${this.title}<h2>`;
    var image_url = $('<img></img>').attr('src',`${this.image_url}`);
    var description =  `<p>${this.description}</p>`;
    section.append(title);
    section.append(image_url);
    section.append(description);
    $('.imageSection').append(section);
}

let keyWords=[];
Horn.prototype.addkey= function(){
    if (keyWords.indexOf(this.keyword) === -1){
        keyWords.push(this.keyword);
    }
}

function render2(){
 
    for(let i=0;i<keyWords.length;i++){
        $('select').append(`<option class="choice" value="${keyWords[i]} " >${keyWords[i]}</option>`); 
    }  

}

const ajaxSettings = {
    method: 'get',
    dataType: 'json'
};

$.ajax('data/data.json',ajaxSettings).then((data) =>{

   data.forEach(element => {
       let horn = new Horn (element.title,element.image_url,element.description,element.keyword,element.horns);
       horn.render();
       horn.addkey();
   });

render2();


});


$('select').on('change',function(){
    $('section').hide();
    console.log(keyWords);
     let selectedImage = $(this).val();
     console.log(selectedImage);
     console.log(keyWords);    
     $(`.${selectedImage}`).show();
      
  
  
      
  });

