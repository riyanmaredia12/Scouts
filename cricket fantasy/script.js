function csvToArray(csv) {
    const rows = csv.split('\n');
    const result = [];
  
    for (const row of rows) {
      const values = row.split(',');
      result.push(values);
    }
  
    return result;
}

const csvString = 'STANDINGS,TEAMS,TEAM OWNER,FANTASY POINTS \n1,Jetha kay jhabaz,Aadil nasir,3147\n2,Noble Rajans,Muneer Didarali Rajan,3041\n3,Armaan XI,Armaan Punjwani,3008\n4,Trend Changers,Shahnil Iqbal,2993\n5,Star boys ,shaayaan shmasuddin,2990\n6,Elegant Eleven ,Saima Nadir,2969\n7,The Thundering Titans,Arsh Maknojia,2849\n8,444,Shazeen Sherzad,2847\n9,Meerayy Underdogs,Sameer Vadsariya,2843\n10,The Winning Team,Sarim Ali Meghani,2804\n11,SMS legends,Salman Mukhtiar,2776\n12,Royal Rajans,Imaad Amyn Rajan,2745\n13,Super xl,Shafeen,2735\n14,Best eleven xl,Shafeen Aslam,2734\n15,Dream 11,Shaheer Ahmed,2731\n16,Hayat,Moiz Hayat,2718\n17,Velocity XI,Sahil Naseer,2713\n18,KhowajaX11,Alnoor nizar,2654\n19,W-11,Ubaid Ali,2618\n20,Wizards Of Wickets ,Raheen Ikram shah,2615\n21,ALLIES,Nausher Rahim,2601\n22,Balig Xl,Balig Barkat Ali,2577\n23,All around the world 11,Ayaan kashif,2576\n24,CA K Balley,Noman Vadsariya,2540\n25,Koko x1,Shafeen aslam,2539\n26,All Stars,Aashir Rahim,2536\n27,World best xl,Shafeen Aslam,2513\n28,Azzy 11,Azim Ali,2504\n29,World 11,Ali Mohammed,2491\n30,Elite Warriors ,Asad,2471\n31,Hit and Run XI,Shahzad Vadsariya,2435\n32,Liverpool,Ezaan Sikander,2422\n33,Amnn Shaheens,Amnn Ajaz,2410\n34,xD XI,Naveed Hakim,2393\n35,UK X1,Nadeem,2380\n35,Gaitonde 11,Maisum,2380\n37,Dororo11,Aly Shah Nizar,2352\n38, Fierce Fighters,Navroz Vadsaria,2333\n39,Balig Gladiators ,Balig Barkat Ali,2324\n40,Scared Shotless,hassan kirmani,2293\n41,Wolf XI,Sarfaraz S. Vadsariya,2267\n42,Chilka11 ,Karim Mehboob,2264\n43,SVxKaku11,Karim Ismail,2245\n44,4 cut Atmaram,Riyan maredia,2238\n45,Ayyan fighters,Ayyan Noushad Solanki,2231\n46,The Elites,Navroz Vadsaria,2214\n47,The real OG,Sahra Iqbal,2203\n48,Maaz 11,Maaz Khalid,2179\n49,Rameez_raja11,Mirsab Malik,2170\n50,Panda Warriors,Shahnil Iqbal,2160\n51,321 pillay,Aariz Aziz,2159\n51,Team Darky,Sharoon Sherzad,2159\n53,Marco polo culb,Hubb-i-Ali,2157\n54,The Pi - Guys,Moiz Ali,2149\n55,SAROSH XI,Sarosh Sher Ali,2146\n56,Ali 11,Ali Muhammad Murad,2017\n57,Lion xl,Shafeen Aslam,2007\n58,Pana Tipu,Riyan maredia,1976\n59,Pinocchios,Sarfaraz S. Vadsariya,1971\n60,CricFlicks XI,Aman Hassan Vadsariya,1942\n60,Mighty lions,Ali nawaz,1942\n62,Titans xl,Shafeen Aslam,1927\n63,Sami falcons ,Sameer Noorddin,1904\n64,Aahil\'s XI,Aahil Aziz,1897\n65,Maxi 11,Azim Ali,1885\n66,Prosperous Legends ,Affan Nadir,1815\n67,hyakkimaru11,Aly Shah Nizar,1749\n68,GOALDIGGERS 11,Ali Shah Kamruddin,1690\n69,AJ XI,Ammad Jamil,1602\n70,Shaheens X1,Haris Hanif Dinani,1370'
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

