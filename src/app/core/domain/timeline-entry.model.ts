import {Moment} from 'moment';
import {TextUtils} from '../../util/TextUtils';

export class TimelineEntry {

    title: string;
    text: string;
    date: Moment;
    articleId: string;

    public getTruncatedText(): string {
        return TextUtils.truncateText(TextUtils.removeAllHtmlTags(this.text), 250);
    }

}
