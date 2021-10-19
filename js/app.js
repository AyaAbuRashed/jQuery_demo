let hornes=[];
function Horn(title, image_url, description, keyword, horns){
   this.title = title;
   this.image_url = image_url;
   this.description = description;
   this.keyword = keyword;
   this.hornes = hornes;
   hornes.push(this);

}

Horn.prototype.displayImage= function(){
    var section = $('<section></section>').addClass(`${this.keyword}`);
    var title = `<h2>${this.title}<h2>`;
    var image_url = $('<img></img>').attr('src',`${this.image_url}`);
    var description =  `<p>${this.description}</p>`;
    section.append(title);
    section.append(image_url);
    section.append(description);
    $('#imageSection').append(section);
}

let keyWords=[];
Horn.prototype.addkey= function(){
    if (keyWords.indexOf(this.keyword) === -1){
        keyWords.push(this.keyword);
    }
}

function render(){


}