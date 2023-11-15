function csvToArray(csv) {
    const rows = csv.split('\n');
    const result = [];
  
    for (const row of rows) {
      const values = row.split(',');
      result.push(values);
    }
  
    return result;
}

const csvString = 'STANDINGS,TEAMS,TEAM OWNER,FANTASY POINTS \n1,Jetha kay jhabaz,Aadil nasir,7067\n2,444,Shazeen Sherzad,7034\n3,SMS legends,Salman Mukhtiar,6407\n4,All around the world 11,Ayaan kashif,6354\n5,The Thundering Titans,Arsh Maknojia,6331\n6,Hayat,Moiz Hayat,6222\n7,Rameez_raja11,Mirsab Malik,6207\n8,Star boys ,shaayaan shmasuddin,6187\n9,Noble Rajans,Muneer Didarali Rajan,6129\n10,The Elites,Navroz Vadsaria,6114\n11,The Winning Team,Sarim Ali Meghani,6093\n12,Armaan XI,Armaan Punjwani,6047\n12,Elegant Eleven ,Saima Nadir,6047\n14,KhowajaX11,Alnoor nizar,5917\n15,W-11,Ubaid Ali,5907\n16,Royal Rajans,Imaad Amyn Rajan,5776\n17,Team Darky,Sharoon Sherzad,5714\n18,Dream 11,Shaheer Ahmed,5676\n19,Azzy 11,Azim Ali,5667\n20,The real OG,Sahra Iqbal,5626\n21,4 cut Atmaram,Riyan maredia,5607\n22,Balig Xl,Balig Barkat Ali,5588\n23,Maaz 11,Maaz Khalid,5574\n24,Ayyan fighters,Ayyan Noushad Solanki,5545\n25,321 pillay,Aariz Aziz,5531\n26,Meerayy Underdogs,Sameer Vadsariya,5523\n27,Liverpool,Ezaan Sikander,5491\n28,All Stars,Aashir Rahim,5486\n29,World 11,Ali Mohammed,5483\n30,Super xl,Shafeen,5456\n31,Koko x1,Shafeen aslam,5424\n32,Marco polo culb,Hubb-i-Ali,5399\n33,Wolf XI,Sarfaraz S. Vadsariya,5319\n34,Lion xl,Shafeen Aslam,5309\n35,Panda Warriors,Shahnil Iqbal,5293\n36,Dororo11,Aly Shah Nizar,5285\n37,Scared Shotless,hassan kirmani,5274\n38,Ali 11,Ali Muhammad Murad,5267\n39,UK X1,Nadeem,5257\n40,Hit and Run XI,Shahzad Vadsariya,5251\n41,Trend Changers,Shahnil Iqbal,5246\n42,Gaitonde 11,Maisum,5224\n43,SAROSH XI,Sarosh Sher Ali,5212\n44,Prosperous Legends ,Affan Nadir,5196\n45,ALLIES,Nausher Rahim,5171\n46,CA Ke Balley,Noman Vadsariya,5170\n47,Velocity XI,Sahil Naseer,5138\n48, Fierce Fighters,Navroz Vadsaria,5133\n49,The Pi - Guys,Moiz Ali,5112\n50,World best xl,Shafeen Aslam,5088\n51,Sami falcons ,Sameer Noorddin,5085\n52,CricFlicks XI,Aman Hassan Vadsariya,5064\n53,Amnn Shaheens,Amnn Ajaz,5046\n54,Best eleven xl,Shafeen Aslam,5036\n55,Elite Warriors ,Asad,4998\n56,xD XI,Naveed Hakim,4885\n57,Mighty lions,Ali nawaz,4880\n58,Maxi 11,Azim Ali,4767\n59,Wizards Of Wickets ,Raheen Ikram shah,4753\n60,Balig Gladiators ,Balig Barkat Ali,4623\n61,AJ XI,Ammad Jamil,4568\n62,SVxKaku11,Karim Ismail,4525\n63,Pana Tipu,Riyan maredia,4489\n64,Titans xl,Shafeen Aslam,4445\n65,Aahil\'s XI,Aahil Aziz,4429\n66,Chilka11 ,Karim Mehboob,4196\n67,GOALDIGGERS 11,Ali Shah Kamruddin,4195\n68,Shaheens X1,Haris Hanif Dinani,3849\n69,hyakkimaru11,Aly Shah Nizar,3797\n70,Pinocchios,Sarfaraz S. Vadsariya,3652'
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

