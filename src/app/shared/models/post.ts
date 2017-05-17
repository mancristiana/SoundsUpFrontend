import { Track } from './track';
import { User } from './user';
/**
 * Created by mancr on 17-May-17.
 */
export class Post {
    id: number;
    description: string;
    user: User;
    track: Track;
}
