function csvToArray(csv) {
    const rows = csv.split('\n');
    const result = [];
  
    for (const row of rows) {
      const values = row.split(',');
      result.push(values);
    }
  
    return result;
}

const csvString = 'STANDINGS,TEAMS,TEAM OWNER,FANTASY POINTS \n1,Armaan XI,Armaan Punjwani,2639\n2,Noble Rajans,Muneer Didarali Rajan,2595\n3,Best eleven xl,Shafeen Aslam,2570\n4,Jetha kay jhabaz,Aadil nasir,2537\n5,Velocity XI,Sahil Naseer,2500\n6,Trend Changers,Shahnil Iqbal,2491\n7,Star boys ,shaayaan shmasuddin,2477\n8,The Winning Team,Sarim Ali Meghani,2454\n9,Super xl,Shafeen,2450\n10,Elegant Eleven ,Saima Nadir,2398\n11,Meerayy Underdogs,Sameer Vadsariya,2381\n11,Dream 11,Shaheer Ahmed,2381\n13,444,Shazeen Sherzad,2367\n13,The Thundering Titans,Arsh Maknojia,2367\n15,SMS legends,Salman Mukhtiar,2359\n16,W-11,Ubaid Ali,2324\n17,Wizards Of Wickets ,Raheen Ikram shah,2322\n18,Balig Xl,Balig Barkat Ali,2303\n19,Hayat,Moiz Hayat,2297\n20,All Stars,Aashir Rahim,2293\n21,Azzy 11,Azim Ali,2262\n22,World best xl,Shafeen Aslam,2224\n23,Elite Warriors ,Asad,2222\n24,Hit and Run XI,Shahzad Vadsariya,2215\n25,CA Ke Balley,Noman Vadsariya,2199\n26,Royal Rajans,Imaad Amyn Rajan,2193\n26,Koko x1,Shafeen aslam,2193\n28,Liverpool,Ezaan Sikander,2117\n29,Wolf XI,Sarfaraz S. Vadsariya,2114\n30,UK X1,Nadeem,2112\n31,xD XI,Naveed Hakim,2100\n32,Chilka11 ,Karim Mehboob,2052\n33,KhowajaX11,Alnoor nizar,2049\n34,All around the world 11,Ayaan kashif,2046\n35,ALLIES,Nausher Rahim,2042\n36,Gaitonde 11,Maisum,2020\n37,Team Darky,Sharoon Sherzad,1969\n38,4 cut Atmaram,Riyan maredia,1952\n39,Ayyan fighters,Ayyan Noushad Solanki,1924\n40,Marco polo culb,Hubb-i-Ali,1922\n41,Amnn Shaheens,Amnn Ajaz,1908\n42, Fierce Fighters,Navroz Vadsaria,1900\n43,Maaz 11,Maaz Khalid,1895\n44,Dororo11,Aly Shah Nizar,1890\n45,Titans xl,Shafeen Aslam,1868\n46,The real OG,Sahra Iqbal,1830\n47,SVxKaku11,Karim Ismail,1809\n48,Panda Warriors,Shahnil Iqbal,1804\n49,World 11,Ali Mohammed,1797\n50,Rameez_raja11,Mirsab Malik,1796\n51,Scared Shotless,hassan kirmani,1792\n52,321 pillay,Aariz Aziz,1779\n53,Balig Gladiators ,Balig Barkat Ali,1759\n54,Ali 11,Ali Muhammad Murad,1714\n55,Lion xl,Shafeen Aslam,1684\n56,The Elites,Navroz Vadsaria,1672\n57,Sami falcons ,Sameer Noorddin,1656\n58,Maxi 11,Azim Ali,1654\n59,The Pi - Guys,Moiz Ali,1637\n59,SAROSH XI,Sarosh Sher Ali,1637\n61,CricFlicks XI,Aman Hassan Vadsariya,1623\n62,Pinocchios,Sarfaraz S. Vadsariya,1599\n63,Pana Tipu,Riyan maredia,1574\n63,Aahil\'s XI,Aahil Aziz,1574\n65,hyakkimaru11,Aly Shah Nizar,1536\n66,GOALDIGGERS 11,Ali Shah Kamruddin,1530\n67,Mighty lions,Ali nawaz,1497\n68,Prosperous Legends ,Affan Nadir,1464\n69,Shaheens X1,Haris Hanif Dinani,1193\n70,AJ XI,Ammad Jamil,1188'
const array = csvToArray(csvString);
array.reverse()
array.pop()
array.reverse()
console.log(array);


function displayTeams() {
    const resultTable = document.getElementById('resultTable');

    array.forEach((team) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${team[0]}</td>
            <td>${team[1]}</td>
            <td>${team[2]}</td>
            <td>${team[3]}</td>
        `;
        resultTable.appendChild(row);
    });
}

window.onload = displayTeams;

document.addEventListener("DOMContentLoaded", function () {
    const body = document.querySelector("body");
    body.classList.add("animate");
});

