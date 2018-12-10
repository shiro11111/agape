import { ChurchEvent } from '../../../events-interface';

export class EventUtil {

  static getEventsList(): ChurchEvent[] {
    return[
      {
        id: 1,
        parish: 'Parafia',
        date: new Date(2018, 11, 3),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a libero ac dolor blandit dictum. ' +
          'In scelerisque, nunc sed ornare mollis.',
        content: 'Lorem ipsum dolor sit amet, consectetur.',
        thumbnail: 'https://kuria.pl/clients/_kuria/_upload/_koscioly/d11_053_KamieAN_Pom._par._Dziwnywek.jpg'
      },
      {
        id: 2,
        parish: 'Parafia',
        date: new Date(2018, 11, 3),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a libero ac dolor blandit dictum. ' +
          'In scelerisque, nunc sed ornare mollis.',
        content: 'Lorem ipsum dolor sit amet, consectetur.',
        thumbnail: 'https://kuria.pl/clients/_kuria/_upload/_koscioly/d11_053_KamieAN_Pom._par._Dziwnywek.jpg'
      },
      {
        id: 3,
        parish: 'Parafia',
        date: new Date(2018, 11, 3),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a libero ac dolor blandit dictum. ' +
          'In scelerisque, nunc sed ornare mollis.',
        content: 'Lorem ipsum dolor sit amet, consectetur.',
        thumbnail: 'https://kuria.pl/clients/_kuria/_upload/_koscioly/d11_053_KamieAN_Pom._par._Dziwnywek.jpg'
      },
      {
        id: 4,
        parish: 'Parafia',
        date: new Date(2018, 11, 3),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a libero ac dolor blandit dictum. ' +
          'In scelerisque, nunc sed ornare mollis.',
        content: 'Lorem ipsum dolor sit amet, consectetur.',
        thumbnail: 'https://kuria.pl/clients/_kuria/_upload/_koscioly/d11_053_KamieAN_Pom._par._Dziwnywek.jpg'
      },
      {
        id: 5,
        parish: 'Parafia',
        date: new Date(2018, 11, 3),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a libero ac dolor blandit dictum. ' +
          'In scelerisque, nunc sed ornare mollis.',
        content: 'Lorem ipsum dolor sit amet, consectetur.',
        thumbnail: 'https://kuria.pl/clients/_kuria/_upload/_koscioly/d11_053_KamieAN_Pom._par._Dziwnywek.jpg'
      },
    ];
  }
}
