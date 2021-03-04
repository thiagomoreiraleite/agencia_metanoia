class Contact < ApplicationRecord
  validates :name, :email, :message, presence: true

  after_create :send_welcome_email

  private

  def send_welcome_email
    ContactMailer.with(contact: self).create_new_contact.deliver_now
  end
end
