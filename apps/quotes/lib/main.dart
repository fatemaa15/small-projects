import 'package:flutter/material.dart';
import 'quotes.dart';
import 'package:quotes/quotes_card.dart';


void main() => runApp(MaterialApp(
  home: QuoteList(),
));


class QuoteList extends StatefulWidget {
  @override
  _QuoteListState createState() => _QuoteListState();
}

class _QuoteListState extends State<QuoteList> {

  List<Quote> quotes = [
    Quote(author: 'Oscar Wilde', text: 'Be yourself'),
    Quote(author: 'Oscar Wilde', text: 'I have nothing to loose'),
    Quote(author: 'Oscar Wilde', text: 'The truth is rarely pure'),

  ];



  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey[200],
      appBar: AppBar(
      title: Text('Awesome Quotes'),
      centerTitle: true,
      backgroundColor: Colors.redAccent,
    ),
      body: Column(
        children: quotes.map((quote) => QuoteCard(
          quote: quote,
          delete: () {
            setState(() {
              quotes.remove(quote);
            });
          }
        )).toList(),
      )
    );
  }
}






