15.times do
  Event.create({
    title: Faker::Lorem.sentence(3),
    location: Faker::Address.full_address,
    description: Faker::Lorem.paragraph(6),
    event_time: Faker::Time.forward(120, :all)
  })
end
