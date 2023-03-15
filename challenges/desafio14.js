db.produtos.find({ingredientes: {$regex: /picles/}}, 
{_id: 0, nome: 1, ingredientes: 1, valoresNutricionais: {$slice: 3 }});