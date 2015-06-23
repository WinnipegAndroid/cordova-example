function onSuccess(contact) {
    alert("Save Success");
};

function onError(contactError) {
    alert("Error = " + contactError.code);
};

function createContact(){
  // create a new contact object
  var contact = navigator.contacts.create();
  contact.displayName = "Dann";
  contact.nickname = "Dann";            // specify both to support all devices

  // populate some fields
  var name = new ContactName();
  name.givenName = "Dann";
  name.familyName = "Blair";
  contact.name = name;

  // save to device
  contact.save(onSuccess,onError);
}
