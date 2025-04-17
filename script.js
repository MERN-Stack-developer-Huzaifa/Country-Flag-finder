const countries = {
    Afghanistan: "https://flagcdn.com/w320/af.png",
    Albania: "https://flagcdn.com/w320/al.png",
    Algeria: "https://flagcdn.com/w320/dz.png",
    Argentina: "https://flagcdn.com/w320/ar.png",
    Australia: "https://flagcdn.com/w320/au.png",
    Austria: "https://flagcdn.com/w320/at.png",
    Bangladesh: "https://flagcdn.com/w320/bd.png",
    Belgium: "https://flagcdn.com/w320/be.png",
    Brazil: "https://flagcdn.com/w320/br.png",
    Canada: "https://flagcdn.com/w320/ca.png",
    Chile: "https://flagcdn.com/w320/cl.png",
    China: "https://flagcdn.com/w320/cn.png",
    Colombia: "https://flagcdn.com/w320/co.png",
    Croatia: "https://flagcdn.com/w320/hr.png",
    Cuba: "https://flagcdn.com/w320/cu.png",
    Czechia: "https://flagcdn.com/w320/cz.png",
    Denmark: "https://flagcdn.com/w320/dk.png",
    Egypt: "https://flagcdn.com/w320/eg.png",
    Estonia: "https://flagcdn.com/w320/ee.png",
    Finland: "https://flagcdn.com/w320/fi.png",
    France: "https://flagcdn.com/w320/fr.png",
    Germany: "https://flagcdn.com/w320/de.png",
    Greece: "https://flagcdn.com/w320/gr.png",
    Hungary: "https://flagcdn.com/w320/hu.png",
    Iceland: "https://flagcdn.com/w320/is.png",
    India: "https://flagcdn.com/w320/in.png",
    Indonesia: "https://flagcdn.com/w320/id.png",
    Iran: "https://flagcdn.com/w320/ir.png",
    Iraq: "https://flagcdn.com/w320/iq.png",
    Ireland: "https://flagcdn.com/w320/ie.png",
    Israel: "https://flagcdn.com/w320/il.png",
    Italy: "https://flagcdn.com/w320/it.png",
    Japan: "https://flagcdn.com/w320/jp.png",
    Jordan: "https://flagcdn.com/w320/jo.png",
    Kenya: "https://flagcdn.com/w320/ke.png",
    Malaysia: "https://flagcdn.com/w320/my.png",
    Mexico: "https://flagcdn.com/w320/mx.png",
    Morocco: "https://flagcdn.com/w320/ma.png",
    Nepal: "https://flagcdn.com/w320/np.png",
    Netherlands: "https://flagcdn.com/w320/nl.png",
    NewZealand: "https://flagcdn.com/w320/nz.png",
    Nigeria: "https://flagcdn.com/w320/ng.png",
    Norway: "https://flagcdn.com/w320/no.png",
    Pakistan: "https://flagcdn.com/w320/pk.png",
    Peru: "https://flagcdn.com/w320/pe.png",
    Philippines: "https://flagcdn.com/w320/ph.png",
    Poland: "https://flagcdn.com/w320/pl.png",
    Portugal: "https://flagcdn.com/w320/pt.png",
    Qatar: "https://flagcdn.com/w320/qa.png",
    Russia: "https://flagcdn.com/w320/ru.png",
    Saudi_Arabia: "https://flagcdn.com/w320/sa.png",
    South_Africa: "https://flagcdn.com/w320/za.png"
  };

  const ShowFlag = () => {
    const input = document.getElementById("country_input").value;
    const newInput = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();

    if (countries[newInput]) {
      document.getElementById("Flag").src = countries[newInput];
      document.getElementById("countryName").innerHTML = newInput;
    } else {
      document.getElementById("countryName").innerHTML = "Country not found";
      document.getElementById("Flag").src = "";
    }
  }