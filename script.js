function csvToArray(csv) {
    const rows = csv.split('\n');
    const result = [];
  
    for (const row of rows) {
      const values = row.split(',');
      result.push(values);
    }
  
    return result;
}

const csvString = 'STANDINGS,TEAMS,TEAM OWNER,FANTASY POINTS \n1,SMS legends,Salman Mukhtiar,5078\n2,444,Shazeen Sherzad,4866\n3,Noble Rajans,Muneer Didarali Rajan,4827\n4,Jetha kay jhabaz,Aadil nasir,4754\n5,Armaan XI,Armaan Punjwani,4746\n6,Hayat,Moiz Hayat,4738\n7,Elegant Eleven ,Saima Nadir,4681\n8,Star boys ,shaayaan shmasuddin,4517\n9,The Thundering Titans,Arsh Maknojia,4514\n10,W-11,Ubaid Ali,4503\n11,Meerayy Underdogs,Sameer Vadsariya,4431\n12,Dream 11,Shaheer Ahmed,4411\n13,The Winning Team,Sarim Ali Meghani,4402\n14,Super xl,Shafeen,4344\n15,Royal Rajans,Imaad Amyn Rajan,4341\n16,KhowajaX11,Alnoor nizar,4332\n17,All around the world 11,Ayaan kashif,4318\n18,The Elites,Navroz Vadsaria,4283\n19,ALLIES,Nausher Rahim,4240\n20,Trend Changers,Shahnil Iqbal,4188\n21,All Stars,Aashir Rahim,4177\n22,World 11,Ali Mohammed,4176\n23,Balig Xl,Balig Barkat Ali,4175\n24,Hit and Run XI,Shahzad Vadsariya,4171\n25,Azzy 11,Azim Ali,4128\n26,Wizards Of Wickets ,Raheen Ikram shah,4103\n27,4 cut Atmaram,Riyan maredia,4094\n28,SVxKaku11,Karim Ismail,4080\n29,Maaz 11,Maaz Khalid,4052\n30,Ayyan fighters,Ayyan Noushad Solanki,3932\n31,Team Darky,Sharoon Sherzad,3926\n32,Lion xl,Shafeen Aslam,3900\n33,Elite Warriors ,Asad,3890\n34,Rameez_raja11,Mirsab Malik,3887\n35,Best eleven xl,Shafeen Aslam,3882\n36,Koko x1,Shafeen aslam,3862\n37,SAROSH XI,Sarosh Sher Ali,3853\n38,Gaitonde 11,Maisum,3840\n39,Velocity XI,Sahil Naseer,3838\n39,321 pillay,Aariz Aziz,3838\n41,The Pi - Guys,Moiz Ali,3815\n42,Liverpool,Ezaan Sikander,3810\n43,Scared Shotless,hassan kirmani,3802\n44,The real OG,Sahra Iqbal,3794\n45,World best xl,Shafeen Aslam,3783\n46,xD XI,Naveed Hakim,3767\n47,Marco polo culb,Hubb-i-Ali,3741\n48,Panda Warriors,Shahnil Iqbal,3704\n49,Amnn Shaheens,Amnn Ajaz,3697\n50,CA Ke Balley,Noman Vadsariya,3636\n51,UK X1,Nadeem,3625\n52,Ali 11,Ali Muhammad Murad,3621\n53,Wolf XI,Sarfaraz S. Vadsariya,3615\n54, Fierce Fighters,Navroz Vadsaria,3610\n55,Balig Gladiators ,Balig Barkat Ali,3607\n56,CricFlicks XI,Aman Hassan Vadsariya,3602\n57,Dororo11,Aly Shah Nizar,3596\n58,Mighty lions,Ali nawaz,3478\n59,Sami falcons ,Sameer Noorddin,3433\n60,Prosperous Legends ,Affan Nadir,3356\n61,Pana Tipu,Riyan maredia,3179\n62,Maxi 11,Azim Ali,3161\n63,Aahil\'s XI,Aahil Aziz,3141\n64,GOALDIGGERS 11,Ali Shah Kamruddin,3128\n65,Titans xl,Shafeen Aslam,3064\n66,Pinocchios,Sarfaraz S. Vadsariya,3063\n67,Chilka11 ,Karim Mehboob,2995\n68,hyakkimaru11,Aly Shah Nizar,2839\n69,AJ XI,Ammad Jamil,2782\n70,Shaheens X1,Haris Hanif Dinani,2593'
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

