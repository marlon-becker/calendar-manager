@user = User.create({
  email: 'marlon@test.com',
  password: 'test',
  password_confirmation: 'test',
})

15.times do
  Event.create({
    title: Faker::Lorem.sentence(3),
    location: Faker::Address.full_address,
    description: Faker::Lorem.paragraph(6),
    event_time: Faker::Time.forward(120, :all),
    user: @user
  })
end
