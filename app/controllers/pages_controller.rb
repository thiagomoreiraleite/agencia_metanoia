class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home ]

  def home
    # @contact = Contact.new
  end

  # def create
  #   @restaurant = params[:restaurant]

  #   mail(
  #     to:       @restaurant.user.email,
  #     subject:  "Restaurant #{@restaurant.name} created!"
  #   )
  # end

  # private

  # def contact_params
  #   params.require(:contact).permit(:name, :email, :telephone, :message)
  # end
end
