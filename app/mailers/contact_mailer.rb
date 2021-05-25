class ContactMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.contact_mailer.create_new_contact.subject
  #
  def create_new_contact
    @contact = params[:contact]
    mail(
      to: 'atendimento@metanoiaestrategia.com',
      subject: "Mensagem enviada pelo site por: #{@contact.name.capitalize} - #{@contact.email}."
    )
  end
end
