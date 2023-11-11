function csvToArray(csv) {
    const rows = csv.split('\n');
    const result = [];
  
    for (const row of rows) {
      const values = row.split(',');
      result.push(values);
    }
  
    return result;
}

const csvString = 'STANDINGS,TEAMS,TEAM OWNER,FANTASY POINTS \n1,444,Shazeen Sherzad,6371\n2,Jetha kay jhabaz,Aadil nasir,6332\n3,SMS legends,Salman Mukhtiar,5983\n4,Noble Rajans,Muneer Didarali Rajan,5934\n5,Hayat,Moiz Hayat,5916\n6,Armaan XI,Armaan Punjwani,5833\n7,The Thundering Titans,Arsh Maknojia,5652\n8,All around the world 11,Ayaan kashif,5619\n9,Star boys ,shaayaan shmasuddin,5608\n10,W-11,Ubaid Ali,5572\n11,The Winning Team,Sarim Ali Meghani,5542\n12,Rameez_raja11,Mirsab Malik,5521\n13,Team Darky,Sharoon Sherzad,5512\n14,Royal Rajans,Imaad Amyn Rajan,5463\n15,KhowajaX11,Alnoor nizar,5401\n16,Liverpool,Ezaan Sikander,5361\n17,The Elites,Navroz Vadsaria,5351\n18,Super xl,Shafeen,5320\n19,Elegant Eleven ,Saima Nadir,5295\n20,Balig Xl,Balig Barkat Ali,5292\n21,The real OG,Sahra Iqbal,5277\n22,Azzy 11,Azim Ali,5270\n23,Maaz 11,Maaz Khalid,5266\n24,Ayyan fighters,Ayyan Noushad Solanki,5245\n25,World 11,Ali Mohammed,5221\n26,Dream 11,Shaheer Ahmed,5168\n27,4 cut Atmaram,Riyan maredia,5140\n28,All Stars,Aashir Rahim,5095\n29,Velocity XI,Sahil Naseer,5049\n29,UK X1,Nadeem,5049\n31,Hit and Run XI,Shahzad Vadsariya,5048\n32,Lion xl,Shafeen Aslam,5042\n33,Gaitonde 11,Maisum,5035\n34,Panda Warriors,Shahnil Iqbal,5008\n35,Wolf XI,Sarfaraz S. Vadsariya,5006\n36,Dororo11,Aly Shah Nizar,5002\n37,Elite Warriors ,Asad,4992\n38,321 pillay,Aariz Aziz,4984\n39,SAROSH XI,Sarosh Sher Ali,4971\n40,Meerayy Underdogs,Sameer Vadsariya,4968\n41,ALLIES,Nausher Rahim,4961\n42,Koko x1,Shafeen aslam,4956\n43,Marco polo culb,Hubb-i-Ali,4954\n44,Best eleven xl,Shafeen Aslam,4928\n45,Trend Changers,Shahnil Iqbal,4908\n46, Fierce Fighters,Navroz Vadsaria,4905\n47,CA Ke Balley,Noman Vadsariya,4855\n48,Prosperous Legends ,Affan Nadir,4840\n49,Sami falcons ,Sameer Noorddin,4764\n50,Amnn Shaheens,Amnn Ajaz,4756\n51,Ali 11,Ali Muhammad Murad,4745\n52,CricFlicks XI,Aman Hassan Vadsariya,4703\n53,Mighty lions,Ali nawaz,4677\n54,Wizards Of Wickets ,Raheen Ikram shah,4664\n55,SVxKaku11,Karim Ismail,4642\n56,Scared Shotless,hassan kirmani,4625\n57,The Pi - Guys,Moiz Ali,4623\n58,World best xl,Shafeen Aslam,4552\n59,xD XI,Naveed Hakim,4539\n60,Maxi 11,Azim Ali,4489\n61,Balig Gladiators ,Balig Barkat Ali,4430\n62,Chilka11 ,Karim Mehboob,4174\n63,Pana Tipu,Riyan maredia,4156\n64,Titans xl,Shafeen Aslam,4143\n65,AJ XI,Ammad Jamil,4035\n66,Aahil\'s XI,Aahil Aziz,3989\n67,GOALDIGGERS 11,Ali Shah Kamruddin,3832\n68,Shaheens X1,Haris Hanif Dinani,3660\n69,Pinocchios,Sarfaraz S. Vadsariya,3652\n70,hyakkimaru11,Aly Shah Nizar,3570'
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

