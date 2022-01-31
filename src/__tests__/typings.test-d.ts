import { expectError, expectType } from 'tsd';
import * as myModule from '../../dist';

// Parsers
expectType<string>(myModule.urlParser(''));
expectError(myModule.urlParser());

expectType<string>(myModule.uriParser(''));
expectError(myModule.uriParser());

expectType<React.FC<myModule.SpotifyEmbedProps>>(myModule.SpotifyEmbed);
