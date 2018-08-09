module Api
  module v1
    class EventController < ApplicationController
      def index
        @events = Event.order('event_time DESC');
        render json: {status:'SUCCESS', message:'Loaded events', data:events}, status:ok
      end
    end
  end
end
