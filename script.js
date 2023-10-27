function csvToArray(csv) {
    const rows = csv.split('\n');
    const result = [];
  
    for (const row of rows) {
      const values = row.split(',');
      result.push(values);
    }
  
    return result;
}

const csvString = 'STANDINGS,TEAMS,TEAM OWNER,FANTASY POINTS \n1,Noble Rajans,Muneer Didarali Rajan,3672\n2,Armaan XI,Armaan Punjwani,3562\n3,Star boys ,shaayaan shmasuddin,3512\n4,SMS legends,Salman Mukhtiar,3506\n5,Hayat,Moiz Hayat,3424\n6,Jetha kay jhabaz,Aadil nasir,3398\n7,The Winning Team,Sarim Ali Meghani,3393\n8,Super xl,Shafeen,3375\n9,Trend Changers,Shahnil Iqbal,3307\n10,444,Shazeen Sherzad,3299\n11,The Thundering Titans,Arsh Maknojia,3282\n12,World 11,Ali Mohammed,3256\n13,Best eleven xl,Shafeen Aslam,3239\n14,Royal Rajans,Imaad Amyn Rajan,3231\n15,Elegant Eleven ,Saima Nadir,3219\n16,Balig Xl,Balig Barkat Ali,3207\n17,Velocity XI,Sahil Naseer,3199\n18,Wizards Of Wickets ,Raheen Ikram shah,3163\n19,Meerayy Underdogs,Sameer Vadsariya,3152\n20,W-11,Ubaid Ali,3146\n21,Elite Warriors ,Asad,3099\n22,Dream 11,Shaheer Ahmed,3092\n23,SVxKaku11,Karim Ismail,3056\n24,ALLIES,Nausher Rahim,3038\n25,KhowajaX11,Alnoor nizar,3026\n26,Koko x1,Shafeen aslam,3019\n27,Azzy 11,Azim Ali,3014\n28,All around the world 11,Ayaan kashif,3004\n29,Liverpool,Ezaan Sikander,2951\n30,Hit and Run XI,Shahzad Vadsariya,2897\n31,Gaitonde 11,Maisum,2872\n32,Ayyan fighters,Ayyan Noushad Solanki,2871\n33,All Stars,Aashir Rahim,2867\n34,CA Ke Balley,Noman Vadsariya,2846\n35,4 cut Atmaram,Riyan maredia,2823\n36,Amnn Shaheens,Amnn Ajaz,2810\n37,Maaz 11,Maaz Khalid,2780\n38,The real OG,Sahra Iqbal,2771\n39,Panda Warriors,Shahnil Iqbal,2756\n40,Team Darky,Sharoon Sherzad,2725\n41,Wolf XI,Sarfaraz S. Vadsariya,2711\n42,World best xl,Shafeen Aslam,2695\n43,Dororo11,Aly Shah Nizar,2694\n43,321 pillay,Aariz Aziz,2694\n45,UK X1,Nadeem,2677\n46,The Pi - Guys,Moiz Ali,2674\n47,Balig Gladiators ,Balig Barkat Ali,2666\n48,Rameez_raja11,Mirsab Malik,2662\n49,The Elites,Navroz Vadsaria,2651\n50,Scared Shotless,hassan kirmani,2629\n51,SAROSH XI,Sarosh Sher Ali,2616\n52,xD XI,Naveed Hakim,2593\n53,Marco polo culb,Hubb-i-Ali,2586\n54,Ali 11,Ali Muhammad Murad,2582\n55, Fierce Fighters,Navroz Vadsaria,2579\n56,Chilka11 ,Karim Mehboob,2477\n57,Lion xl,Shafeen Aslam,2464\n58,Sami falcons ,Sameer Noorddin,2438\n59,Mighty lions,Ali nawaz,2429\n60,Prosperous Legends ,Affan Nadir,2405\n61,CricFlicks XI,Aman Hassan Vadsariya,2360\n62,Maxi 11,Azim Ali,2305\n63,Pana Tipu,Riyan maredia,2250\n64,Pinocchios,Sarfaraz S. Vadsariya,2240\n65,Titans xl,Shafeen Aslam,2202\n66,Aahil\'s XI,Aahil Aziz,2160\n67,hyakkimaru11,Aly Shah Nizar,2092\n68,GOALDIGGERS 11,Ali Shah Kamruddin,2055\n69,AJ XI,Ammad Jamil,1813\n70,Shaheens X1,Haris Hanif Dinani,1736'
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

