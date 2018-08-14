module Api
  module V1
    class EventsController < ApplicationController
      before_action :authenticate_user

      def index
        events = Event.where(user: current_user).order('event_time ASC');
        render json: {status:'SUCCESS', message:'Loaded events', data:events}, status: :ok
      end

      def show
        event = Event.where(:id => params[:id]).where(user: current_user)
        if event.length > 0
          render json: {status:'SUCCESS', message:'Loaded event', data:event}, status: :ok
        else
          render json: {status:'ERROR', message:'Event loaded failed'}, status: :unprocessable_entity
        end
      end

      def create
        event = current_user.events.new(event_params)
        if event.save
          render json: {status:'SUCCESS', message:'Saved event', data:event}, status: :ok
        else
          render json: {status:'ERROR', message:'Event not saved', data:event.errors}, status: :unprocessable_entity
        end
      end

      def destroy
        event = Event.find(params[:id])
        if event.user.id == current_user.id
          event.destroy
          render json: {status:'SUCCESS', message:'Deleted event', data:event}, status: :ok
        else
          render json: {status:'ERROR', message:'Event not deleted'}, status: :unprocessable_entity
        end
      end

      def update
        event = Event.find(params[:id])
        if event.user.id == current_user.id && event.update_attributes(event_params)
          render json: {status:'SUCCESS', message:'Updated event', data:event}, status: :ok
        else
          render json: {status:'ERROR', message:'Event not updated', data:event.errors}, status: :unprocessable_entity
        end
      end

      private

      def event_params
         params.permit(:title, :description, :event_time, :location)
      end

    end
  end
end
