class ContactsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:new, :create]

  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contact_params)
    redirect_to root_path
    # mail = ContactMailer.with(contact: @contact).create_new_contact
    # mail.deliver_now
    # redirect_to root_path
  end

  def contact_params
    params.require(:contact).permit(:name, :email, :telephone, :message)
  end
end
