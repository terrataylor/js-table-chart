//Email.js Documentation:  https://dashboard.emailjs.com/integration
//Note:  You need to sign up for your own email address with emailjs 
$("#sendemail").click(function () {

    var templateParams = {
        to_email: $("#emailAddress").val(),
        to_name: 'James',
        from_name: 'Check this out!',
        message_html: `<h2>This is going to be amazing!</h2>`
    };

    emailjs.send('default_service', 'template_183Hqqzf', templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });

});





$("#form").submit(function (event) {
    console.log(event);
    event.preventDefault();
    let user = {
        name: $("#name").val(),
        lunch: $("#lunch").val(),
        price: $("#price").val()
    };
    console.log(user);
    data.push(user);
    console.log(data);
    $("tbody").empty();
    render(data);


})


function render(dataArr) {
    $("tbody").empty();
    let counter = 0;
    for (let i = 0; i < dataArr.length; i++) {

        $("tbody").append(
            ` <tr>
            <th scope="row">${i}</th>
            <td>${dataArr[i].name}</td>
            <td>${dataArr[i].lunch}</td>
            <td>${dataArr[i].price}</td>
        </tr>`
        )
        counter = counter + parseInt(dataArr[i].price);
    }
    console.log(counter);
    $("tbody").append(
        ` <tr>
    <th scope="row"></th>
    <td></td>
    <td></td>
    <td>$${counter}</td>
</tr>`);

}



function main() {
    console.log(data);

    render(data);
    let names = [];
    let prices = [];

    for (let i = 0; i < data.length; i++) {
        names.push(data[i].name);
        prices.push(data[i].price);
    }
    console.log(names, prices);

    console.log(document.getElementById('myChart'));
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: names,
            datasets: [{
                label: 'Lunch Prices',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: prices
            }]
        },

        // Configuration options go here
        options: {}
    });


}



$(main)