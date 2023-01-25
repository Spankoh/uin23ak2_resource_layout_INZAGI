function content(index){  

    document.getElementById("tab0").classList.remove("active");
    document.getElementById("tab1").classList.remove("active");
    document.getElementById("tab2").classList.remove("active");
    document.getElementById("tab3").classList.remove("active");
    document.getElementById("tab4").classList.remove("active");

    
    document.getElementById("text").innerHTML = `<h2>${resources[index].category}</h2><p>${resources[index].text}</p>`
    
    let text= ""
    for (let i = 0; i < resources[index].sources.length; i++) {
        text += `<li><a href="${resources[index].sources[i].url}">${resources[index].sources[i].title}</a></li>`;
      }
    document.getElementById("sources").innerHTML = text

    
    
    document.getElementById("tab"+index).classList.add("active")
   

}


