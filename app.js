const nodemailer = require('nodemailer');
const directTransport = require('nodemailer-direct-transport');

// Email address that sends the emails
const fromHost = `node-email-verification.${process.env.REPL_OWNER.toLowerCase()}.repl.co`;
const from = 'verify' + '@' + fromHost;

console.log('Emails will be sent from:');
console.log(from, '\n');

// Ask for email address
const to = prompt('Enter your email address ').trim();

// Generate a random verification code
const trueVerificationCode = Math.round(Math.random() * (10e5 - 1)).toString();

// Create the email transport
const transport = nodemailer.createTransport(directTransport({
  name: fromHost
}));

const emailNames = ['test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7', 'test8', 'test9', 'test10', 'test11', 'test12', 'test13', 'test14', 'test15', 'test16', 'test17', 'test18', 'test19', 'test20', 'test21', 'test22', 'test23', 'test24', 'test25', 'test26', 'test27', 'test28', 'test29', 'test30', 'test31', 'test32', 'test33', 'test34', 'test35', 'test36', 'test37', 'test38', 'test39', 'test40', 'test41', 'test42', 'test43', 'test44', 'test45', 'test46', 'test47', 'test48', 'test49', 'test50', 'test51', 'test52', 'test53', 'test54', 'test55', 'test56', 'test57', 'test58', 'test59', 'test60', 'test61', 'test62', 'test63', 'test64', 'test65', 'test66', 'test67', 'test68', 'test69', 'test70', 'test71', 'test72', 'test73', 'test74', 'test75', 'test76', 'test77', 'test78', 'test79', 'test80', 'test81', 'test82', 'test83', 'test84', 'test85', 'test86', 'test87', 'test88', 'test89', 'test90', 'test91', 'test92', 'test93', 'test94', 'test95', 'test96', 'test97', 'test98', 'test99', 'test100', 'test101', 'test102', 'test103', 'test104', 'test105', 'test106', 'test107', 'test108', 'test109', 'test110', 'test111', 'test112', 'test113', 'test114', 'test115', 'test116', 'test117', 'test118', 'test119', 'test120', 'test121', 'test122', 'test123', 'test124', 'test125', 'test126', 'test127', 'test128', 'test129', 'test130', 'test131', 'test132', 'test133', 'test134', 'test135', 'test136', 'test137', 'test138', 'test139', 'test140', 'test141', 'test143', 'test251',
'test252',
'test253',
'test254',
'test255',
'test256',
'test257',
'test258',
'test259',
'test260',
'test261',
'test262',
'test263',
'test264',
'test265',
'test266',
'test267',
'test268',
'test269',
'test270',
'test271',
'test272',
'test273',
'test274',
'test275',
'test276',
'test277',
'test278',
'test279',
'test280',
'test281',
'test282',
'test283',
'test284',
'test285',
'test286',
'test287',
'test288',
'test289',
'test290',
'test291',
'test292',
'test293',
'test294',
'test295',
'test296',
'test297',
'test298',
'test299',
'test300',
                   'test301', 'test302', 'test303', 'test304', 'test305', 'test306', 'test307', 'test308', 'test309', 'test310',
'test311', 'test312', 'test313', 'test314', 'test315', 'test316', 'test317', 'test318', 'test319', 'test320',
'test321', 'test322', 'test323', 'test324', 'test325', 'test326', 'test327', 'test328', 'test329', 'test330',
'test331', 'test332', 'test333', 'test334', 'test335', 'test336', 'test337', 'test338', 'test339', 'test340',
'test341', 'test342', 'test343', 'test344', 'test345', 'test346', 'test347', 'test348', 'test349', 'test350',
'test351', 'test352', 'test353', 'test354', 'test355', 'test356', 'test357', 'test358', 'test359', 'test360',
'test361', 'test362', 'test363', 'test364', 'test365', 'test366', 'test367', 'test368', 'test369', 'test370',
'test371', 'test372', 'test373', 'test374', 'test375', 'test376', 'test377', 'test378', 'test379', 'test380',
'test381', 'test382', 'test383', 'test384', 'test385', 'test386', 'test387', 'test388', 'test389', 'test390',]; 
// Ask for number of emails to send
const emailCount = parseInt(prompt('How many emails do you want to send?'));

// Loop through the specified number of times and send the email with different email names
// Loop through the specified number of times and send the email with different email names
for (let i = 0; i < emailCount; i++) {
  const fromName = `verify${i+1}`;
  transport.sendMail({ // <<<< Remove the 'const' here
    from: `${fromName}@${fromHost}`,
    to,
    subject: 'penis, penis',
    html: `...` // same email content as before
  }, (err, data) => {
    if (err) {
      console.error('There was an error:', err);
    } else {
      console.log(`Verification email sent from ${fromName}@${fromHost}`);
    }
  });
}
