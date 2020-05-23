enum Membership {
  Simple,
  Standard,
  Premium
}

const membership = Membership.Standard;
const membershipReverse = Membership[1];
console.log('membership, membershipReverse', membership, membershipReverse);

enum SocialMedia {
  VK = 'VK',
  FACEBOOK = 'FACEBOOK',
  INSTAGRAM = 'Instagram'
}

const social = SocialMedia.INSTAGRAM;
console.log(social);