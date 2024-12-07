function contact_num_valid(evt) {
    var theEvent = evt || window.event;
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var count = (evt.target.value.match(/\+/g) || []).length;
    if (count < 2 && key == '+') {
        evt.target.value = evt.target.value.replace(/\+/g, "");
        evt.target.value = '+' + evt.target.value;
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
        return false;
    }
    var regex = /[+0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}
jQuery("#Contact_Us").submit(function(e) {
jQuery(this).find('input[type="password"],input[type="text"],input[type="number"],input[type="tel"],input[type="email"],textarea').each(function(){jQuery(this).val($.trim(jQuery(this).val()));})
function valid_contact()
{	
    var company_name=document.querySelector('#Contact_Us #company_name');
	var name=document.querySelector('#Contact_Us #name');
    var job_title=document.querySelector('#Contact_Us #job_title');
    var address=document.querySelector('#Contact_Us #address');
    var city=document.querySelector('#Contact_Us #city');
    var country=document.querySelector('#Contact_Us #country');
	var email=document.querySelector('#Contact_Us #email');
	var contact_no=document.querySelector('#Contact_Us #contact_no');
	var whatsapp_no=document.querySelector('#Contact_Us #whatsapp_no');
	var website=document.querySelector('#Contact_Us #website');
	var requirement=document.querySelector('#Contact_Us #requirement');
	var type_of_business=document.querySelector('#Contact_Us #type_of_business');
	var machine_requirements=document.querySelector('#Contact_Us #machine_requirements');
	var production_capacity=document.querySelector('#Contact_Us #production_capacity');
	var machine_experience=document.querySelector('#Contact_Us #machine_experience');
	var project_stage=document.querySelector('#Contact_Us #project_stage');
//	var about_vishva_machinery[]=document.querySelector('#Contact_Us #about_vishva_machinery[]');
    var comments=document.querySelector('#Contact_Us #comments');
    
    if(company_name.value=='')
	{
		document.querySelector('#Contact_Us #error_data').innerHTML = '* Please Enter First Company Name.';
		company_name.style.borderColor="red";
		company_name.focus();
		return false;
	}
	else{company_name.style.borderColor=""}
	var digit = company_name.value;
	var alpha = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])+(\s{0,1}[a-zA-Z-, ])*$/;
	if(!alpha.test(digit)) {
		document.querySelector('#Contact_Us #error_data').innerHTML = '* Invalid Company Name: ' + company_name.value;
		company_name.style.borderColor="red";		
		company_name.value = '';
		company_name.focus();
		return false;
	}
	else{company_name.style.borderColor=""}
    
	if(name.value=='')
	{
		document.querySelector('#Contact_Us #error_data').innerHTML = '* Please Enter Contact Person Name.';
		name.style.borderColor="red";
		name.focus();
		return false;
	}
	else{name.style.borderColor=""}
	var digit = name.value;
	var alpha = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])+(\s{0,1}[a-zA-Z-, ])*$/;
	if(!alpha.test(digit)) {
		document.querySelector('#Contact_Us #error_data').innerHTML = '* Invalid Contact Person Name: ' + name.value;
		name.style.borderColor="red";		
		name.value = '';
		name.focus();
		return false;
	}
	else{name.style.borderColor=""}
    
	if(job_title.value=='')
	{
		document.querySelector('#Contact_Us #error_data').innerHTML = '* Please Enter Job Title.';
		job_title.style.borderColor="red";
		job_title.focus();
		return false;
	}
	else{job_title.style.borderColor=""}
	var digit = job_title.value;
	var alpha = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])+(\s{0,1}[a-zA-Z-, ])*$/;
	if(!alpha.test(digit)) {
		document.querySelector('#Contact_Us #error_data').innerHTML = '* Invalid Job Title: ' + job_title.value;
		job_title.style.borderColor="red";		
		job_title.value = '';
		job_title.focus();
		return false;
	}
	else{job_title.style.borderColor=""}
    
    
	if(address.value=='')
	{
		document.querySelector('#Contact_Us #error_data').innerHTML = '* Please Enter address.';
		address.style.borderColor="red";
		address.focus();
		return false;
	}
	else{address.style.borderColor=""}
	var digit = address.value;
	var alpha = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])+(\s{0,1}[a-zA-Z-, ])*$/;
	if(!alpha.test(digit)) {
		document.querySelector('#Contact_Us #error_data').innerHTML = '* Invalid address: ' + address.value;
		address.style.borderColor="red";		
		address.value = '';
		address.focus();
		return false;
	}
	else{address.style.borderColor=""}
    
    if(city.value=='')
	{
		document.querySelector('#Contact_Us #error_data').innerHTML = '* Please Enter city name.';
		city.style.borderColor="red";
		city.focus();
		return false;
	}
	else{city.style.borderColor=""}
	var digit = city.value;
	var alpha = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])+(\s{0,1}[a-zA-Z-, ])*$/;
	if(!alpha.test(digit)) {
		document.querySelector('#Contact_Us #error_data').innerHTML = '* Invalid city name: ' + city.value;
		city.style.borderColor="red";		
		city.value = '';
		city.focus();
		return false;
	}
	else{city.style.borderColor=""}
    
     if(country.value=='')
	{
		document.querySelector('#Contact_Us #error_data').innerHTML = '* Please Enter country name.';
		country.style.borderColor="red";
		country.focus();
		return false;
	}
	else{country.style.borderColor=""}
	var digit = country.value;
	var alpha = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])+(\s{0,1}[a-zA-Z-, ])*$/;
	if(!alpha.test(digit)) {
		document.querySelector('#Contact_Us #error_data').innerHTML = '* Invalid country name: ' + country.value;
		country.style.borderColor="red";		
		country.value = '';
		country.focus();
		return false;
	}
	else{country.style.borderColor=""}
    
	 if(email.value=='')
	{
		document.querySelector('#Contact_Us #error_data').innerHTML = '* Please Enter Email ID.';
		email.style.borderColor="red";
		email.focus();
		return false;
	}else{email.style.borderColor=""}
	var c_reg = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
	var c_address = email.value;
	if(c_reg.test(c_address) == false) {
		document.querySelector('#Contact_Us #error_data').innerHTML = '* Invalid Email ID: ' + email.value;
		email.style.borderColor="red";
		email.value = '';
		email.focus();
		return false;
	}
	else{email.style.borderColor=""}
    
	if(contact_no.value=='')
	{
		document.querySelector('#Contact_Us #error_data').innerHTML = '* Please Enter Contact No.';
	
		contact_no.style.borderColor="red";
		contact_no.focus();
		return false;
	}else{contact_no.style.borderColor=""}
	var c_mobile = contact_no.value.replace(/\+/g,'');
	var c_pattern = /^(?!(\d)\1+\b|1234567890)\d{10,}$/;
	if (!c_pattern.test(c_mobile)) {
		document.querySelector('#Contact_Us #error_data').innerHTML = '* Invalid Contact No.: ' + contact_no.value;
		contact_no.style.borderColor="red";
		contact_no.value = '';
        contact_no.focus();
		return false;
	}else{contact_no.style.borderColor=""}
   
    if(whatsapp_no.value=='')
	{
		document.querySelector('#Contact_Us #error_data').innerHTML = '* Please Enter WhatsApp same as Phone number';
	
		whatsapp_no.style.borderColor="red";
		whatsapp_no.focus();
		return false;
	}else{whatsapp_no.style.borderColor=""}
	var c_mobile = whatsapp_no.value.replace(/\+/g,'');
	var c_pattern = /^(?!(\d)\1+\b|1234567890)\d{10,}$/;
	if (!c_pattern.test(c_mobile)) {
		document.querySelector('#Contact_Us #error_data').innerHTML = '* Invalid WhatsApp same as Phone number: ' + whatsapp_no.value;
		whatsapp_no.style.borderColor="red";
		whatsapp_no.value = '';
        whatsapp_no.focus();
		return false;
	}else{whatsapp_no.style.borderColor=""}
    
     if(website.value=='')
	{
		document.querySelector('#Contact_Us #error_data').innerHTML = '* Please Enter website name.';
		website.style.borderColor="red";
		website.focus();
		return false;
	}
	else{website.style.borderColor=""}
	
    
     if(requirement.value=='')
	{
		document.querySelector('#Contact_Us #error_data').innerHTML = '* Please Enter requirement name.';
		requirement.style.borderColor="red";
		requirement.focus();
		return false;
	}
	else{requirement.style.borderColor=""}
	var digit = requirement.value;
	var alpha = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])+(\s{0,1}[a-zA-Z-, ])*$/;
	if(!alpha.test(digit)) {
		document.querySelector('#Contact_Us #error_data').innerHTML = '* Invalid requirement name: ' + requirement.value;
		requirement.style.borderColor="red";		
		requirement.value = '';
		requirement.focus();
		return false;
	}
	else{requirement.style.borderColor=""}
    
//   if(type_of_business.value=='')
// 	{
// 		document.querySelector('#Contact_Us #error_data').innerHTML = '* Please Select Type of business.';
// 		type_of_business.style.borderColor="red";
// 		type_of_business.focus();
// 		return false;
// 	}else{type_of_business.style.borderColor=""}
    
    // if(machine_requirements.value=='')
	// {
	// 	document.querySelector('#Contact_Us #error_data').innerHTML = '* Please Select Type of machine requirements.';
	// 	machine_requirements.style.borderColor="red";
	// 	machine_requirements.focus();
	// 	return false;
	// }else{machine_requirements.style.borderColor=""}
    
    
    // if(production_capacity.value=='')
	// {
	// 	document.querySelector('#Contact_Us #error_data').innerHTML = '* Please Select Current Production Capacity.';
	// 	production_capacity.style.borderColor="red";
	// 	production_capacity.focus();
	// 	return false;
	// }else{production_capacity.style.borderColor=""}
    
    // if(machine_experience.value=='')
	// {
	// 	document.querySelector('#Contact_Us #error_data').innerHTML = '* Please Select Machine Experience.';
	// 	machine_experience.style.borderColor="red";
	// 	machine_experience.focus();
	// 	return false;
	// }else{machine_experience.style.borderColor=""}

// if(project_stage.value=='')
// 	{
// 		document.querySelector('#Contact_Us #error_data').innerHTML = '* Please Select Project Stage.';
// 		project_stage.style.borderColor="red";
// 		project_stage.focus();
// 		return false;
// 	}else{project_stage.style.borderColor=""}

//     if(jQuery('[name="about_vishva_machinery[]"]:checked').length < 1){
//        document.querySelector('#Contact_Us #error_data').innerHTML = '* Please Select How did you know about Vishva Machinery.';
//    jQuery('[name="about_vishva_machinery[]"]').parent().attr('style','border-color:red');
////    jQuery('#pname').get(0).scrollIntoView({behavior: 'smooth', block: "start"});
//    return false;
//  }
//  else{jQuery('[name="about_vishva_machinery[]"]').parent().attr('style','')}

    if(comments.value=='')
	{
		document.querySelector('#Contact_Us #error_data').innerHTML = '* Please Enter comments.';
		comments.style.borderColor="red";
		comments.focus();
		return false;
	}else{comments.style.borderColor=""}
    var digitt = comments.value.replace(/\+/g,'');
//    var alphaa = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])+(\s{0,1}[a-zA-Z-, ])*$/;
    var alphaa =/^[A-Za-z0-9? ,_-]/;
    if(!alphaa.test(digitt)) {
		document.querySelector('#Contact_Us #error_data').innerHTML = '* Invalid comments: ' + comments.value;
		comments.style.borderColor="red";		
		comments.value = '';
		comments.focus();
		return false;
	}
	else{comments.style.borderColor=""}
    
	
	document.querySelector('#Contact_Us #error_data').innerHTML = '';
	return true;
}
	if(valid_contact()==true){document.querySelector('#Contact_Us #form_process').style.visibility="visible";jQuery(this).find('[type="submit"]').prop('disabled', true);//.fadeOut('slow');
		var form_url = jQuery("#Contact_Us").attr('action'); // the script where you handle the form input.	
		$.ajax({
			   type: "POST",
			   url: form_url,
			   data: jQuery("#Contact_Us").serialize(), // serializes the form's elements.
			   success: function(data)
			   {
                   var fomVal = jQuery.parseJSON(data);
					if(fomVal.status == 1)
					{
						jQuery.ajax({
							type: "POST",
							url: "https://api.compubrain.com/api/MAIL_API.php",
							data: fomVal,
							success: function(response)
							{
								jQuery("#Contact_Us").empty();
								jQuery("#Contact_Us").replaceWith(response);
							},
							error: function(error)
							{
								jQuery("#Contact_Us").empty();
								jQuery("#Contact_Us").html("<div class='alert alert-danger'>Sorry! Some Technical issue occured. Please try again after sometime.</div>"); // show response from the php script.
							}		
						});
					}
					else
					{
						jQuery("#Contact_Us").empty();
						jQuery("#Contact_Us").html("<div class='alert alert-danger'>Sorry! Some Technical issue occured. Please try again after sometime.</div>"); // show response from the php script.
					}
			   },
			   error: function(data)
			   {
				   jQuery("#Contact_Us").empty();
				   jQuery("#Contact_Us").html("<div class='alert alert-danger'>Sorry! Some Technical issue occured. Please try again after sometime.</div>"); // show response from the php script.
			   }
			 });
	
			e.preventDefault();
	}
	else{e.preventDefault();}
});