api_url = `http://134.209.132.159/${lang}/`

function post_data(url, data, callback) {
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: url,
        data: JSON.stringify(data),
        success: callback
    })
}

function get_data(url, callback) {
    $.ajax({
        type: "GET",
        url: url,
        success: callback
    })
}

function get_news() {
    service_api = api_url + 'api/article/'
    get_data(service_api, render_service)
}

function get_projects() {
    service_api = api_url + 'api/project/'
    get_data(service_api, render_projects)
}

function get_stats() {
    service_api = api_url + 'api/statistic/'
    get_data(service_api, render_stats)
}

function render_service(response) {
    let html = ''
    for (let i = 0; i < response.length; i++) {
        html += response[i].content
    }
    $('#news_container').html(html)
}

function render_projects(response) {
    console.log(response)
    let html = ''
    for (let i = 0; i < response.length; i++) {
        html += `  <!-- Project -->
            <div class="col-12 project row py-3">
                <div class="col-md-4">
                    <img
                            src="${response[i].image}"
                            alt="project"
                            width="100%"
                            height="300px"
                            style="object-fit: cover"
                    />
                </div>
                <div class="col-md-6 info mx-auto">
                    ${response[i].content}
                </div>
            </div>
            <hr>
            <!-- End of Project -->`
    }
    $('#projects_list').html(html)
}

function render_stats(response) {
	console.log(response[0].employers)
    ec = (response[0].employers) ? response[0].employers : 595
    pc = (response[0].projects) ? response[0].projects : 25
    vc = (response[0].vendors) ? response[0].vendors : 10
    $('#employees_count').text(ec)
    $('#projects_count').text(pc)
    $('#vendors_count').text(vc)
}

$(document).ready(function () {
    get_news()
    get_stats()
    get_projects()
});

$('#contact_us_button').click(function () {
    name = $('#name').val()
    email = $('#email').val()
    phone = $('#phone').val()
    subjectmessage = $('#subjectmessage').val()
    message = $('#message').val()
    console.log(name, email, phone, subjectmessage, message)
    data = {
        "name": name,
        "email": email,
        "phone": phone,
        "subject": subjectmessage,
        "message": message
    }
    service_api = api_url + 'api/contact-us/'
    post_data(service_api, data, contact_us_succes)
})

$('#hr_button').click(function () {
    first_name = $('#first_name').val()
    last_name = $('#last_name').val()
    middle_name = $('#middle_name').val()
    email = $('#email').val()
    phone = $('#phone').val()
    specialization = $('#specialization').val()
    message = $('#message').val()
    data = {
        "first_name": first_name,
        "last_name": last_name,
        "middle_name": middle_name,
        "email": email,
        "phone": phone,
        "specialization": specialization,
        "message": message
    }
    service_api = api_url + 'api/human-resourse/'
    post_data(service_api, data, contact_us_succes)
})

function contact_us_succes() {
   window.location.reload()
}