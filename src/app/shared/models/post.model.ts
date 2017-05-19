import { Track } from './track.model';
import { User } from './user.model';
/**
 * Created by mancr on 17-May-17.
 */
export class Post {
    id: number;
    description: string;
    user: User;
    track: Track;
}
