require 'test_helper'

class ContactMailerTest < ActionMailer::TestCase
  test "create_new_contact" do
    mail = ContactMailer.create_new_contact
    assert_equal "Create new contact", mail.subject
    assert_equal ["to@example.org"], mail.to
    assert_equal ["from@example.com"], mail.from
    assert_match "Hi", mail.body.encoded
  end

end
