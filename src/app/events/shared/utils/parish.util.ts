import { Parish } from '../../../models/parish';
import { Post } from '../../../models/post';
import { List } from '../../../models/list';
import { Community } from '../../../models/community';
import { ParishEvent } from '../../../models/parishEvent';

export class ParishUtil {

  static getParish(): Parish {
    return {
      id: 1,
      image: {
        id: 1,
        imageName: 'img_46552314_75e38578020fba81864216ec248f711f',
        imageSize: 22,
        updatedAt: '2018-12-11',
        extension: 'jpeg',
        discriminator: 'parish'
      },
      iskkNumber: 1231,
      name: 'Parafia św. Łazarza',
      dedicated: 'assd',
      city: 'Lublin',
      street: 'Okulickiego 6A',
      buildingNumber: '12',
      apartmentNumber: '123',
      postCode: '12-343',
      postCity: 'asdfg',
      phoneNumber: '1213245',
      deanery: {
        id: 1,
        name: 'Dekanat 2',
        diocese: {
          id: 1,
          name: 'Diecezja 1'
        }
      },
      parishType: {
        id: 1,
        name: 'Parafia'
      },
      province: {
        id: 1,
        name: 'Lubelskie',
        code: 6
      }
    };
  }

  static getPostsList(): List<Post> {
    return {
      maxResults: '2',
      subscriptions: [1, 2, 3, 4],
      items: [
        {
          id: 1,
          createdAt: '13-12-2018',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu viverra leo. Vestibulum libero metus, ' +
            'blandit sit amet mattis at, convallis eget enim. Maecenas lacinia libero in odio molestie, et dapibus sem eleifend. Nullam a ' +
            'molestie est, ut venenatis nisl. Donec quis tempus diam. ',
          parish: {
            id: 1,
            image: {
              id: 1,
              imageName: 'img_46552314_75e38578020fba81864216ec248f711f',
              imageSize: 22,
              updatedAt: '2018-12-11',
              extension: 'jpeg',
              discriminator: 'parish'
            },
            name: 'Parafia',
            city: 'Lublin'
          },
          community: null
        },
        {
          id: 2,
          createdAt: '13-12-2018',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu viverra leo. Vestibulum libero metus, ' +
            'blandit sit amet mattis at, convallis eget enim. Maecenas lacinia libero in odio molestie, et dapibus sem eleifend. Nullam a ' +
            'molestie est, ut venenatis nisl. Donec quis tempus diam. ',
          parish: {
            id: 2,
            image: {
              id: 2,
              imageName: 'img_46552314_75e38578020fba81864216ec248f711f',
              imageSize: 22,
              updatedAt: '2018-12-11',
              extension: 'jpeg',
              discriminator: 'parish'
            },
            name: 'Parafia',
            city: 'Lublin'
          },
          community: null
        },
        {
          id: 3,
          createdAt: '13-12-2018',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu viverra leo. Vestibulum libero metus, ' +
            'blandit sit amet mattis at, convallis eget enim. Maecenas lacinia libero in odio molestie, et dapibus sem eleifend. Nullam a ' +
            'molestie est, ut venenatis nisl. Donec quis tempus diam. ',
          parish: {
            id: 3,
            image: {
              id: 2,
              imageName: 'img_46552314_75e38578020fba81864216ec248f711f',
              imageSize: 22,
              updatedAt: '2018-12-11',
              extension: 'jpeg',
              discriminator: 'parish'
            },
            name: 'Parafia',
            city: 'Lublin'
          },
          community: null
        },
        {
          id: 4,
          createdAt: '13-12-2018',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu viverra leo. Vestibulum libero metus, ' +
            'blandit sit amet mattis at, convallis eget enim. Maecenas lacinia libero in odio molestie, et dapibus sem eleifend. Nullam a ' +
            'molestie est, ut venenatis nisl. Donec quis tempus diam. ',
          parish: {
            id: 4,
            image: {
              id: 2,
              imageName: 'img_46552314_75e38578020fba81864216ec248f711f',
              imageSize: 22,
              updatedAt: '2018-12-11',
              extension: 'jpeg',
              discriminator: 'parish'
            },
            name: 'Parafia',
            city: 'Lublin'
          },
          community: null
        }
      ]
    };
  }
  static getCommunityList(): List<Community> {
    return {
      maxResults: '27',
      subscriptions: [1, 2, 3, 4],
      items: [
        {
          id: 1,
          image: {
            id: 1,
            imageName: 'img_46552314_75e38578020fba81864216ec248f711f',
            imageSize: 22,
            updatedAt: '2018-12-11',
            extension: 'jpeg',
            discriminator: 'parish'
          },
          name: 'Koło różańcowe',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed tellus ex. Praesent aliquet ex eget metus ' +
            'tristique bibendum. Pellentesque dui enim, fringilla sit amet ligula eu, imperdiet venenatis mi. Donec vitae pharetra massa. ' +
            'Aliquam ornare sem quis lacinia elementum.',
          createdAt: '14-12-2018'
        },
        {
          id: 2,
          image: {
            id: 2,
            imageName: 'img_46552314_75e38578020fba81864216ec248f711f',
            imageSize: 22,
            updatedAt: '2018-12-11',
            extension: 'jpeg',
            discriminator: 'parish'
          },
          name: 'Oaza',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed tellus ex. Praesent aliquet ex eget metus' +
            ' tristique bibendum. Pellentesque dui enim, fringilla sit amet ligula eu, imperdiet venenatis mi. Donec vitae pharetra massa.' +
            ' Aliquam ornare sem quis lacinia elementum.',
          createdAt: '14-12-2018'
        },
        {
          id: 3,
          image: {
            id: 3,
            imageName: 'img_46552314_75e38578020fba81864216ec248f711f',
            imageSize: 22,
            updatedAt: '2018-12-11',
            extension: 'jpeg',
            discriminator: 'parish'
          },
          name: 'Schola młodzieżowa',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed tellus ex. Praesent aliquet ex eget metus' +
            ' tristique bibendum. Pellentesque dui enim, fringilla sit amet ligula eu, imperdiet venenatis mi. Donec vitae pharetra massa.' +
            ' Aliquam ornare sem quis lacinia elementum.',
          createdAt: '14-12-2018'
        }
      ]
    };
  }

  static getEventsList(): List<ParishEvent> {
    return  {
      maxResults: '5',
      subscriptions: [1, 2, 3, 4],
      items: [
        {
          id: 1,
          title: 'Droga krzyżowa',
          description: 'ajdhjkasbckds',
          organizationAt: 'Lublin 19.11.2019',
          image: null,
          parish: {
            id: 1,
            image: {
              id: 1,
              imageName: 'img_46552314_75e38578020fba81864216ec248f711f',
              imageSize: 22,
              updatedAt: '2018-12-11',
              extension: 'jpeg',
              discriminator: 'parish'
            },
            name: 'Parafia',
            city: 'Lublin'
          },
          community: null,
          tags: [
            {
              id: 5,
              name: 'Rekolekcje adwentowe'
            }
          ]
        },
        {
          id: 2,
          title: 'Koncert Arki Noego',
          description: 'ajdhjkasbckds',
          organizationAt: 'Lublin 19.11.2019',
          image: null,
          parish: {
            id: 2,
            image: {
              id: 2,
              imageName: 'img_46552314_75e38578020fba81864216ec248f711f',
              imageSize: 22,
              updatedAt: '2018-12-11',
              extension: 'jpeg',
              discriminator: 'parish'
            },
            name: 'Parafia',
            city: 'Lublin'
          },
          community: null,
          tags: [
            {
              id: 5,
              name: 'Rekolekcje adwentowe'
            }
          ]
        },
        {
          id: 3,
          title: 'Piknik charytatywny',
          description: 'ajdhjkasbckds',
          organizationAt: 'Lublin 19.11.2019',
          image: null,
          parish: {
            id: 3,
            image: {
              id: 3,
              imageName: 'img_46552314_75e38578020fba81864216ec248f711f',
              imageSize: 22,
              updatedAt: '2018-12-11',
              extension: 'jpeg',
              discriminator: 'parish'
            },
            name: 'Parafia',
            city: 'Lublin'
          },
          community: null,
          tags: [
            {
              id: 5,
              name: 'Rekolekcje adwentowe'
            }
          ]
        },
      ]
    };
  }
}



